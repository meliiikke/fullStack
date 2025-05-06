import { Button, Form, Input, InputNumber, message, Spin } from "antd";
import { useState } from "react";

const CreateCouponPage = () => {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const apiUrl = import.meta.env.VITE_API_BASE_URL;

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const response = await fetch(`${apiUrl}/api/coupons`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if (response.ok) {
        message.success("Kupon başarıyla oluşturuldu :)");
        form.resetFields();
      } else {
        message.error("Kupon oluşturulurken bir hata oluştu");
      }
    } catch (error) {
      console.log("Kupon oluşturma hatası", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Spin spinning={loading}>
      <Form form={form} name="basic" layout="vertical" onFinish={onFinish}>
        <Form.Item
          label="Kupon Kodu"
          name="code"
          rules={[{ required: true, message: "Lütfen kupon kodunu girin" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="İndirim Oranı"
          name="discountPercent"
          rules={[{ required: true, message: "Lütfen indirim oranını girin" }]}
        >
          <InputNumber />
        </Form.Item>

        <Button type="primary" htmlType="submit">
          Oluştur
        </Button>
      </Form>
    </Spin>
  );
};
export default CreateCouponPage;
