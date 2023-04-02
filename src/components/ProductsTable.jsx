import { Button, Input, Switch, Table, Tabs } from "antd";
import { useEffect, useState } from "react";
import posts from "../services/mainservices";

const ProductsTable = () => {
  const [search, setSearch] = useState("");
  const token = window.localStorage.token;

  const columns = [
    {
      title: "Product Name",
      dataIndex: "name",
      filteredValue: [search],
      onFilter: (value, record) => {
        return (
          String(record.name).toLowerCase().includes(value.toLowerCase()) ||
          String(record.product).toLowerCase().includes(value.toLowerCase()) ||
          String(record.category).toLowerCase().includes(value.toLowerCase()) ||
          String(record.barcode).toLowerCase().includes(value.toLowerCase())
        );
      },
    },
    {
      title: "Products",
      dataIndex: "product",
    },
    {
      title: "Barcode",
      dataIndex: "barcode",
    },
    {
      title: "sku",
      dataIndex: "sku",
    },
    {
      title: "Categories",
      dataIndex: "category",
    },
    {
      title: "Tavsif",
      dataIndex: "description",
    },
    {
      title: "Miqdor",
      dataIndex: "count",
    },
    {
      title: "Shippable",
      dataIndex: "shippable",
    },
    {
      title: "Show-market",
      dataIndex: "showMarket",
    },
  ];

  const [dateh, setDateh] = useState([]);
  useEffect(() => {
    posts
      .products(token)
      .then((res) => res.json())
      .then((datad) => setDateh(datad.items));
  }, []);

  const dataa = [];
  dateh.forEach((element) => {
    dataa.push({
      key: element.id,
      name: element.productName,
      barcode: element.barcode,
      sku: element.sku,
      category: element.name,
      product: element.product,
      shippable: <Switch checked={element.shippable} />,
      showMarket: <Switch checked={element.showMarket} />,
      count: element.stocks[0].count + element.unit,
      description: element.description,
    });
  });

  const tabData = [];
  dateh.forEach((element) => {
    tabData.push({
      key: element.id,
      name: element.productName,
    });
  });

  const [selectedRowKeys, setSelectedRowKeys] = useState([dateh.length]);
  const [loading, setLoading] = useState(false);
  const start = () => {
    setLoading(true);
    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };
  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;
  return (
    <>
    
      <div>
        <div
          style={{
            marginBottom: 16,
            display: "flex",
          }}
        >
          <Button
            type="primary"
            onClick={start}
            disabled={!hasSelected}
            loading={loading}
          >
            Reload
          </Button>
          <span
            style={{
              marginLeft: 150,
            }}
          >
            {hasSelected ? `Selected ${selectedRowKeys.length} items` : ""}
          </span>
          <Input.Search
            onSearch={(value) => {
              setSearch(value);
            }}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            style={{ width: 300, marginLeft: 220 }}
          />
        </div>
        <Table
          rowSelection={rowSelection}
          columns={columns}
          scroll={{ x: 3000 }}
          dataSource={dataa}
        />
      </div>
    </>
  );
};
export default ProductsTable;
