/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState } from "react";
import {
  Layout,
  Row,
  Col,
  Typography,
  Input,
  Button,
  Divider,
  Space,
  List,
} from "antd";
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  YoutubeOutlined,
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  RightOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import ServiceFeatures from "../../HomeSection/ServiceFeature/ServiceFeature";
import { Link } from "react-router-dom";

const { Footer } = Layout;
const { Title, Text, Paragraph } = Typography;
const { Search } = Input;

// Footer links data
const footerLinks = [
  {
    title: "Shop",
    links: [
      { name: "Men's Collection", to: "/collections/men" },
      { name: "Women's Collection", to: "/collections/women" },
      { name: "Kids Collection", to: "/collections/kids" },
      { name: "Accessories", to: "/collections/accessories" },
      { name: "New Arrivals", to: "/new-arrivals" },
    ],
  },
  {
    title: "Information",
    links: [
      { name: "About Us", to: "/about" },
      { name: "Contact Us", to: "/contact" },
      { name: "Blog", to: "/blog" },
      { name: "FAQs", to: "/faqs" },
      { name: "Terms & Conditions", to: "/terms" },
    ],
  },
  {
    title: "Customer Service",
    links: [
      { name: "Shipping Policy", to: "/shipping" },
      { name: "Returns & Exchanges", to: "/returns" },
      { name: "Size Guide", to: "/size-guide" },
      { name: "Track Order", to: "/track-order" },
      { name: "Privacy Policy", to: "/privacy" },
    ],
  },
];

export default function AntdFooter() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (value: string) => {};

  return (
    <>
      <ServiceFeatures />
      <Footer style={{ padding: 0, background: "#f5f5f5" }}>
        {/* Main Footer Content */}
        <div style={{ background: "#fff", padding: "60px 0 40px" }}>
          <div className="container mx-auto px-4">
            <Row gutter={[48, 32]}>
              {/* Company Info */}
              <Col xs={24} md={8}>
                <div className="mb-6">
                  <Link to="/" className="flex items-center">
                    <span className="text-2xl font-bold">
                      <span className="text-black">eco</span>
                      <span style={{ color: "#7c3aed" }}>mart</span>
                    </span>
                  </Link>
                </div>
                <Paragraph
                  style={{ color: "rgba(0, 0, 0, 0.65)", marginBottom: 24 }}
                >
                  Your one-stop marketplace for all eco-friendly products. We
                  connect conscious consumers with sustainable vendors from
                  around the world.
                </Paragraph>
                <Space direction="vertical" size="middle">
                  <Space>
                    <EnvironmentOutlined
                      style={{ color: "#7c3aed", fontSize: 18 }}
                    />
                    <Text>123 Eco Street, Green City, Earth</Text>
                  </Space>
                  <Space>
                    <PhoneOutlined style={{ color: "#7c3aed", fontSize: 18 }} />
                    <Text>+1 (555) 123-4567</Text>
                  </Space>
                  <Space>
                    <MailOutlined style={{ color: "#7c3aed", fontSize: 18 }} />
                    <Text>support@ecomart.com</Text>
                  </Space>
                </Space>

                {/* Social Media */}
                <div style={{ marginTop: 24 }}>
                  <Title level={5}>Follow Us</Title>
                  <Space size="middle">
                    <Button
                      type="text"
                      shape="circle"
                      icon={<FacebookOutlined style={{ fontSize: 20 }} />}
                      style={{ background: "#f0f0f0" }}
                    />
                    <Button
                      type="text"
                      shape="circle"
                      icon={<TwitterOutlined style={{ fontSize: 20 }} />}
                      style={{ background: "#f0f0f0" }}
                    />
                    <Button
                      type="text"
                      shape="circle"
                      icon={<InstagramOutlined style={{ fontSize: 20 }} />}
                      style={{ background: "#f0f0f0" }}
                    />
                    <Button
                      type="text"
                      shape="circle"
                      icon={<YoutubeOutlined style={{ fontSize: 20 }} />}
                      style={{ background: "#f0f0f0" }}
                    />
                  </Space>
                </div>
              </Col>

              {/* Quick Links */}
              {footerLinks.map((column) => (
                <Col key={column.title} xs={24} sm={8} md={5}>
                  <Title
                    level={5}
                    style={{ marginBottom: 16, position: "relative" }}
                  >
                    {column.title}
                    <div
                      style={{
                        position: "absolute",
                        bottom: -5,
                        left: 0,
                        width: 30,
                        height: 2,
                        background: "#7c3aed",
                      }}
                    ></div>
                  </Title>
                  <List
                    dataSource={column.links}
                    split={false}
                    renderItem={(item) => (
                      <List.Item style={{ padding: "6px 0", border: "none" }}>
                        <Link
                          to={item.to}
                          className="flex items-center hover:text-purple-600 transition-colors"
                        >
                          <RightOutlined
                            style={{
                              fontSize: 10,
                              marginRight: 8,
                              color: "#7c3aed",
                            }}
                          />
                          {item.name}
                        </Link>
                      </List.Item>
                    )}
                  />
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </Footer>
    </>
  );
}
