/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Form,
  Input,
  Button,
  InputNumber,
  Space,
  Divider,
  Select,
  message,
} from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { useEffect } from "react";
import { Product } from "../../../types/productType";
import {
  useGetCategoriesQuery,
  useGetProductByIdQuery,
  useUpdateProductMutation,
} from "../../../redux/api/productApi";
import Spinner from "../Spinner/Spinner";

const { TextArea } = Input;

const EditProductForm = ({
  productId,
  onSuccess,
}: {
  productId: number;
  onSuccess: () => void;
}) => {
  const [form] = Form.useForm();
  const {
    data: product,
    isLoading,
    isError,
  } = useGetProductByIdQuery(productId);
  const [updateProduct, { isLoading: isUpdating }] = useUpdateProductMutation();
  const { data: categories } = useGetCategoriesQuery(undefined);

  useEffect(() => {
    if (product) {
      form.setFieldsValue({
        ...product,
        reviews: product.reviews || [],
      });
    }
  }, [product]);

  const onFinish = async (values: Product) => {
    const updatedData = {
      ...product,
      ...values,
      id: product.id,
    };

    try {
      await updateProduct(updatedData).unwrap();
      console.log("Product updated successfully!", updatedData);
      message.success("!");
      onSuccess();
    } catch (error) {
      message.error("Failed to update product.");
    }
  };

  if (isLoading) {
    return <Spinner />;
  }
  if (isError) return <p>Something went wrong!</p>;

  return (
    <Form
      layout="vertical"
      form={form}
      onFinish={onFinish}
      initialValues={product}
      className="mt-4"
    >
      <Form.Item name="title" label="Title" rules={[{ required: true }]}>
        <Input />
      </Form.Item>

      <Form.Item name="description" label="Description">
        <TextArea rows={4} />
      </Form.Item>

      <Form.Item name="price" label="Price">
        <InputNumber className="w-full" />
      </Form.Item>

      <Form.Item name="category" label="Category">
        <Select
          placeholder="Select category"
          options={(categories || []).map((cat: string) => ({
            value: cat,
            label: cat,
          }))}
        />
      </Form.Item>

      <Form.Item name="warrantyInformation" label="Warranty Information">
        <Input />
      </Form.Item>

      <Form.Item name="shippingInformation" label="Shipping Information">
        <Input />
      </Form.Item>

      <Form.Item name="returnPolicy" label="Return Policy">
        <Input />
      </Form.Item>

      <Divider orientation="left">Reviews</Divider>

      <Form.List name="reviews">
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, ...restField }) => (
              <Space key={key} align="baseline" className="flex-wrap mb-4">
                <Form.Item
                  {...restField}
                  name={[name, "reviewerName"]}
                  rules={[{ required: true, message: "Name is required" }]}
                >
                  <Input placeholder="Name" />
                </Form.Item>
                <Form.Item
                  {...restField}
                  name={[name, "reviewerEmail"]}
                  rules={[{ required: true, type: "email" }]}
                >
                  <Input placeholder="Email" />
                </Form.Item>
                <Form.Item
                  {...restField}
                  name={[name, "comment"]}
                  rules={[{ required: true, message: "Comment is required" }]}
                >
                  <Input placeholder="Comment" />
                </Form.Item>
                <Form.Item
                  {...restField}
                  name={[name, "rating"]}
                  rules={[{ required: true, message: "Rating is required" }]}
                >
                  <InputNumber min={1} max={5} placeholder="Rating" />
                </Form.Item>
                <MinusCircleOutlined
                  onClick={() => remove(name)}
                  className="text-red-500"
                />
              </Space>
            ))}
            <Form.Item>
              <Button
                type="dashed"
                onClick={() => add()}
                icon={<PlusOutlined />}
              >
                Add Review
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>

      <Form.Item>
        <Button type="primary" htmlType="submit" loading={isUpdating}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default EditProductForm;
