import { AiOutlineSearch, AiOutlineCloseCircle } from "react-icons/ai";
import { GrPowerReset } from "react-icons/gr";
import { Input, Space, Table, Modal } from "antd";
import Highlighter from "react-highlight-words";
import { useState } from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../../redux/action/productActions";
import { useEffect } from "react";
import imgError from "../../Image/imgError.jpg";

const TableAntd = ({ orderData }) => {
  const dispatch = useDispatch();
  const [modalProduct, setModalProduct] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const [selectedOrder, setSelectedOrder] = useState([]);
  const searchInput = useRef(null);
  const productList = useSelector((state) => state.productList);
  const { products } = productList;

  useEffect(() => {
    if (!products || products?.length == 0) dispatch(listProducts());
  }, []);
  const getProductNameById = (productId) => {
    const pro = products.find((item) => item._id === productId);
    console.log("pro :>> ", pro);
    return pro ? pro.title : "Sản phẩm không tồn tại";
  };

  const getProductImagesById = (productId) => {
    const pro = products.find((item) => item._id === productId);
    console.log("pro :>> ", pro);
    return pro ? pro.images[0].url : imgError;
  };
  const getProductPriceById = (productId) => {
    const pro = products.find((item) => item._id === productId);
    console.log("pro :>> ", pro);
    return pro ? pro.price : 0;
  };

  const totalPriceProduct = (price, qty) => {
    const total = price * qty;
    return total;
  };
  const showModal = (products) => {
    console.log(JSON.parse(products));
    setSelectedOrder(JSON.parse(products));
    setModalProduct(true);
  };

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
    console.log(selectedKeys[0]);
    console.log(dataIndex);
  };
  const handleReset = (clearFilters, confirm, dataIndex) => {
    clearFilters();
    confirm();
    setSearchText("");
    setSearchedColumn(dataIndex);
  };
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
      close,
    }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: "block",
          }}
        />
        <Space>
          <button
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            type="button"
            className="text-white bg-[#fe2c6d] hover:bg-[#fe2c6d]/90 focus:ring-4 focus:outline-none focus:ring-[#fe2c6d]/50 font-medium rounded-lg text-sm px-3.5 py-2 text-center inline-flex items-center mr-2 mb-2"
          >
            <AiOutlineSearch />
            Tìm kiếm
          </button>
          <button
            onClick={() =>
              clearFilters && handleReset(clearFilters, confirm, dataIndex)
            }
            type="button"
            className="text-black bg-[#fff] hover:bg-[#fff]/90 focus:ring-4 focus:outline-none focus:ring-[#fff]/50 font-medium rounded-lg text-sm px-3.5 py-2 text-center inline-flex items-center mr-2 mb-2"
          >
            <GrPowerReset />
            Đặt lại
          </button>

          <button
            onClick={() => {
              close();
            }}
            type="button"
            className="text-black bg-[#fff] hover:bg-[#fff]/90 focus:ring-4 focus:outline-none focus:ring-[#fff]/50 font-medium rounded-lg text-sm px-3.5 py-2 text-center inline-flex items-center mr-2 mb-2"
          >
            Đóng
          </button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <AiOutlineSearch
        style={{
          color: filtered ? "#1677ff" : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: "#ffc069",
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });
  let arr = [];

  orderData.map((item, index) => {
    const data = {
      key: index + 1,
      products: JSON.stringify(item.products),
      payment: item.paymentIntent.name,
      // shipping: item.shippingMethor.name,
      status: item.orderStatus,
      total: item.totalPrice.toLocaleString("vi-VN", {
        style: "currency",
        currency: "VND",
      }),
    };
    arr.push(data);
  });

  const columns = [
    {
      title: "STT",
      dataIndex: "key",
      key: "key",
      width: "10%",
      ...getColumnSearchProps("key"),
      sorter: (a, b) => a.key - b.key,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Sản phẩm",
      key: "products",
      width: "20%",
      render: (text, record) => (
        <button
          className="text-white bg-[#fe2c6d] hover:bg-[#fe2c6d]/90 focus:ring-4 focus:outline-none focus:ring-[#fe2c6d]/50 font-medium rounded-lg text-sm px-3.5 py-2 text-center inline-flex items-center mr-2 mb-2"
          onClick={() => showModal(record.products)}
        >
          Chi tiết ({JSON.parse(record.products).length})
        </button>
      ),
      // ...getColumnSearchProps('products'),
    },
    {
      title: "Phương thức thanh toán",
      dataIndex: "payment",
      key: "payment",
      width: "30%",
      ...getColumnSearchProps("payment"),
    },
    {
      title: "Tổng tiền",
      dataIndex: "total",
      key: "total",
      width: "20%",
      ...getColumnSearchProps("total"),
      sorter: (a, b) => a.total - b.total,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      width: "20%",
      ...getColumnSearchProps("status"),
    },
  ];

  return (
    <>
      <Table
        pagination={{
          pageSize: 5,
        }}
        columns={columns}
        dataSource={arr}
      />

      <Modal
        title="Tất cả sản phẩm"
        onCancel={() => setModalProduct(false)}
        open={modalProduct}
        width="70%  "
        footer={[
          <button
            onClick={() => setModalProduct(false)}
            type="button"
            className="text-white bg-[#fe2c6d] hover:bg-[#fe2c6d]/90 focus:ring-4 focus:outline-none focus:ring-[#fe2c6d]/50 font-medium rounded-lg text-sm px-3.5 py-2 text-center inline-flex items-center mr-2 mb-2"
          >
            <AiOutlineCloseCircle />
            Đóng
          </button>,
        ]}
      >
        <div className="w-full overflow-x-scroll">
          <table className="table-fixed text-center mx-auto text-sm ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
              <tr>
                <th className="px-6 py-3">STT</th>
                <th className="px-6 py-3">Ảnh</th>
                <th className="px-6 py-3">Tên</th>
                <th className="px-6 py-3">Số lượng</th>
                <th className="px-6 py-3">Giá sản phẩm</th>
                <th className="px-6 py-3">Tổng tiển sản phẩm</th>
              </tr>
            </thead>
            <tbody>
              {selectedOrder.map((item, index) => (
                <tr key={index}>
                  <td className="px-6 py-4">{index + 1}</td>
                  <td className="px-6 py-4">
                    <img
                      src={getProductImagesById(item.product)}
                      style={{ width: "50px", height: "50px" }}
                      alt=""
                      className="rounded-lg shadow-md"
                    />
                  </td>
                  <td className="truncate max-w-[300px] px-6 py-4">
                    {getProductNameById(item.product)}
                  </td>
                  <td className="px-6 py-4">{item.qty}</td>
                  <td className="px-6 py-4">
                    {getProductPriceById(item.product).toLocaleString("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    })}
                  </td>
                  <td className="px-6 py-4">
                    {totalPriceProduct(
                      getProductPriceById(item.product),
                      item.qty
                    ).toLocaleString("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Modal>
    </>
  );
};

export default TableAntd;
