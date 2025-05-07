import { Button, Form, Input, InputNumber, message, Select, Spin } from "antd";
import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useNavigate, useParams } from "react-router-dom";

const UpdateProductPage = () => {
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [form] = Form.useForm();
  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  const params = useParams();
  const productId = params.id;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [categoriesResponse, singleProductResponse] = await Promise.all([
          fetch(`${apiUrl}/api/categories`),
          fetch(`${apiUrl}/api/products/${productId}`),
        ]);

        if (!categoriesResponse.ok || !singleProductResponse.ok) {
          message.error("Veri Getirme Başarısız");
          return;
        }
        const [categoriesData, singleProductData] = await Promise.all([
          categoriesResponse.json(),
          singleProductResponse.json(),
        ]);

        setCategories(categoriesData);

        if (singleProductData) {
          form.setFieldsValue({
            name: singleProductData.name,
            current: singleProductData.price.current,
            discount: singleProductData.price.discount,
            description: singleProductData.description,
            img: singleProductData.img.join("\n"),
            colors: singleProductData.colors.join("\n"),
            size: singleProductData.size.join("\n"),
            category: singleProductData.category,
          });
        }
      } catch (error) {
        console.log("Veri Hatası:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [apiUrl, productId, form]);

  const onFinish = async (values) => {
    const imgLinks = values.img.split("\n").map((link) => link.trim());
    const colors = values.colors.split("\n").map((link) => link.trim());
    const size = values.size.split("\n").map((link) => link.trim());

    setLoading(true);
    try {
      const response = await fetch(`${apiUrl}/api/products/${productId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...values,
          price: {
            current: values.current,
            discount: values.discount,
          },
          colors,
          size,
          img: imgLinks,
        }),
      });
      if (response.ok) {
        message.success("Ürün başarıyla güncellendi :)");
        navigate("/admin/products");
      } else {
        message.error("Ürün güncellenirken bir hata oluştu");
      }
    } catch (error) {
      console.log("Ürün güncelleme hatası", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Spin spinning={loading}>
      <Form form={form} name="basic" layout="vertical" onFinish={onFinish}>
        <Form.Item
          label="Ürün İsmi"
          name="name"
          rules={[{ required: true, message: "Lütfen ürün adını girin" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Ürün Kategorisi "
          name="category"
          rules={[
            {
              required: true,
              message: "Lütfen 1 kategori seçin",
            },
          ]}
        >
          <Select>
            {categories.map((category) => (
              <Select.Option value={category._id} key={category._id}>
                {category.name}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          label="Fiyat"
          name="current"
          rules={[{ required: true, message: "Lütfen ürün fiyatı girin" }]}
        >
          <InputNumber />
        </Form.Item>

        <Form.Item
          label="İndirim Oranı"
          name="discount"
          rules={[
            { required: true, message: "Lütfen bir ürün indirim oranı girin" },
          ]}
        >
          <InputNumber />
        </Form.Item>

        <Form.Item
          label="Ürün Açıklaması"
          name="description"
          rules={[
            { required: true, message: "Lütfen bir ürün açıklaması girin" },
          ]}
        >
          <ReactQuill theme="snow" style={{ backgroundColor: "white" }} />
        </Form.Item>

        <Form.Item
          label="Ürün Görselleri (Linkler)"
          name="img"
          rules={[
            {
              required: true,
              message: "Lütfen en az 4 ürün görsel linki girin.",
            },
          ]}
        >
          <Input.TextArea
            placeholder="Her bir görsel linkini yeni bir satıra yazın"
            autoSize={{ minRows: 4 }}
          />
        </Form.Item>

        <Form.Item
          label="Ürün Renkleri (RGB Kodları)"
          name="colors"
          rules={[
            {
              required: true,
              message: "Lütfen en az 1 ürün rengi girin.",
            },
          ]}
        >
          <Input.TextArea
            placeholder="Her bir RGB kodunu yeni bir satıra yazın"
            autoSize={{ minRows: 4 }}
          />
        </Form.Item>

        <Form.Item
          label="Ürün Bedenleri "
          name="size"
          rules={[
            {
              required: true,
              message: "Lütfen en az 1 ürün beden ölçüsü girin.",
            },
          ]}
        >
          <Input.TextArea
            placeholder="Her bir beden ölçüsünü yeni bir satıra yazın"
            autoSize={{ minRows: 4 }}
          />
        </Form.Item>

        <Button type="primary" htmlType="submit">
          Güncelle
        </Button>
      </Form>
    </Spin>
  );
};
export default UpdateProductPage;
