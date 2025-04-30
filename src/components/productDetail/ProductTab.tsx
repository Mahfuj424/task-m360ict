/* eslint-disable @typescript-eslint/no-unused-vars */
import { Tabs, Form, Input, Button, Select, Rate, Space } from "antd";
import { useEffect } from "react";
import {
  useGetCategoriesQuery,
  useUpdateProductMutation,
} from "../../redux/api/productApi";
import { Product } from "../../types/productType";

const { TabPane } = Tabs;

type reviewsProps = {
  reviews: string[];
  product: Product;
};
export const DescriptionTab = ({
  description,
  warrantyInformation,
  shippingInformation,
  returnPolicy,
}: Partial<Product>) => (
  <div className="space-y-2">
    <p>
      <strong>Description:</strong> {description}
    </p>
    <p>
      <strong>Warranty:</strong> {warrantyInformation}
    </p>
    <p>
      <strong>Shipping:</strong> {shippingInformation}
    </p>
    <p>
      <strong>Return Policy:</strong> {returnPolicy}
    </p>
  </div>
);

export const ReviewsTab = ({ reviews = [], product }: reviewsProps) => {
  const [form] = Form.useForm();
  const { data: categories } = useGetCategoriesQuery(undefined);
  const [updateProduct] = useUpdateProductMutation();

  useEffect(() => {
    form.setFieldsValue({
      reviews,
      category: product.category,
    });
  }, [reviews, product]);

  const onFinish = (values: Partial<Product>) => {
    const updatedData = {
      ...product,
      reviews: values.reviews,
      category: values.category,
    };
    console.log("Updated Product:", updatedData);
    updateProduct(updatedData);
  };

  return (
    <Form form={form} onFinish={onFinish} layout="vertical">
      <Form.List name="reviews">
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name }) => (
              <Space key={key} align="baseline" className="flex gap-4 mb-4">
                <Form.Item
                  name={[name, "reviewerName"]}
                  rules={[{ required: true, message: "Name required" }]}
                >
                  <Input placeholder="Reviewer Name" />
                </Form.Item>
                <Form.Item
                  name={[name, "reviewerEmail"]}
                  rules={[{ required: true, message: "Email required" }]}
                >
                  <Input placeholder="Reviewer Email" />
                </Form.Item>
                <Form.Item
                  name={[name, "comment"]}
                  rules={[{ required: true, message: "Comment required" }]}
                >
                  <Input placeholder="Comment" />
                </Form.Item>
                <Form.Item name={[name, "rating"]} rules={[{ required: true }]}>
                  <Rate />
                </Form.Item>
                <Button onClick={() => remove(name)} danger>
                  Remove
                </Button>
              </Space>
            ))}
            <Form.Item>
              <Button type="dashed" onClick={() => add()} block>
                Add Review
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>

      <Form.Item name="category" label="Category" rules={[{ required: true }]}>
        <Select placeholder="Select Category">
          {categories?.map((cat: string) => (
            <Select.Option key={cat} value={cat}>
              {cat}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit Edits
        </Button>
      </Form.Item>
    </Form>
  );
};
