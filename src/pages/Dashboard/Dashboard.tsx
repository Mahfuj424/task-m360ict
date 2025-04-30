/* eslint-disable @typescript-eslint/no-explicit-any */
import { Table, Button, Modal } from "antd";
import { useState } from "react";
import { useGetProductsQuery } from "../../redux/api/productApi";
import EditProductForm from "../../components/ui/EditProduct/EditProductForm";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [page, setPage] = useState(1);
  const [selectedProductId, setSelectedProductId] = useState<number | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data, isLoading } = useGetProductsQuery({
    limit: 10,
    skip: (page - 1) * 10,
  });

  const columns = [
    {
      title: "Product",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (price: number) => `$${price}`,
    },
    {
      title: "Actions",
      key: "actions",
      render: (_: any, record: any) => (
        <div className="flex gap-2">
          <Button className="text-blue-600 border-blue-600 hover:bg-blue-50">
            <Link to={`/product/${record.id}`}>View</Link>
          </Button>
          <Button
            className="text-green-600 border-green-600 hover:bg-green-50"
            onClick={() => {
              setSelectedProductId(record.id);
              setIsModalOpen(true);
            }}
          >
            Edit
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Product Dashboard</h1>
      <Table
        loading={isLoading}
        dataSource={data?.products || []}
        columns={columns}
        rowKey="id"
        pagination={{
          current: page,
          total: data?.total,
          pageSize: 10,
          onChange: (p) => setPage(p),
        }}
        className="shadow-md rounded-md"
      />

      <Modal
        title="Edit Product"
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
        width={800}
      >
        {selectedProductId && (
          <EditProductForm
            productId={selectedProductId}
            onSuccess={() => {
              setIsModalOpen(false);
            }}
          />
        )}
      </Modal>
    </div>
  );
};

export default Dashboard;
