import { AiOutlineSearch } from "react-icons/ai";
import { GrPowerReset } from "react-icons/gr";
import { Button, Input, Space, Table, Modal } from "antd";


import Highlighter from 'react-highlight-words';
import { useState } from "react";
import { useRef } from "react";

const TableAntd = ({ orderData }) => {
    const [modalProduct, setModalProduct] = useState(false);
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef(null);
    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
        console.log(selectedKeys[0])
        console.log(dataIndex);
    };
    const handleReset = (clearFilters, confirm, dataIndex) => {
        clearFilters();
        confirm();
        setSearchText('');
        setSearchedColumn(dataIndex);

    };
    const getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
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
                    onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{
                        marginBottom: 8,
                        display: 'block',
                    }}
                />
                <Space>
                    <button onClick={() => handleSearch(selectedKeys, confirm, dataIndex)} type="button" class="text-white bg-[#fe2c6d] hover:bg-[#fe2c6d]/90 focus:ring-4 focus:outline-none focus:ring-[#fe2c6d]/50 font-medium rounded-lg text-sm px-3.5 py-2 text-center inline-flex items-center mr-2 mb-2">
                        <AiOutlineSearch />
                        Tìm kiếm
                    </button>
                    <button onClick={() => clearFilters && handleReset(clearFilters, confirm, dataIndex)} type="button" class="text-black bg-[#fff] hover:bg-[#fff]/90 focus:ring-4 focus:outline-none focus:ring-[#fff]/50 font-medium rounded-lg text-sm px-3.5 py-2 text-center inline-flex items-center mr-2 mb-2">
                        <GrPowerReset />
                        Đặt lại
                    </button>

                    <button onClick={() => {
                        close();
                    }} type="button" class="text-black bg-[#fff] hover:bg-[#fff]/90 focus:ring-4 focus:outline-none focus:ring-[#fff]/50 font-medium rounded-lg text-sm px-3.5 py-2 text-center inline-flex items-center mr-2 mb-2">

                        Đóng
                    </button>


                </Space>
            </div>
        ),
        filterIcon: (filtered) => (
            <AiOutlineSearch
                style={{
                    color: filtered ? '#1677ff' : undefined,
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
                        backgroundColor: '#ffc069',
                        padding: 0,
                    }}
                    searchWords={[searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />
            ) : (
                text
            ),
    });
    let arr = []

    orderData.map((item, index) => {
        const data = {
            key: index + 1,
            products: JSON.stringify(item.products),
            payment: item.paymentIntent.name,
            shipping: item.shippingMethor.name,
            status: item.orderStatus,
            total: item.totalPrice
        }
        arr.push(data)
    })

    const columns = [
        {
            title: 'STT',
            dataIndex: 'key',
            key: 'key',
            width: '10%',
            ...getColumnSearchProps('key'),
            sorter: (a, b) => a.key - b.key,
            sortDirections: ['descend', 'ascend'],
            
        },
        {
            title: 'Sản phẩm',
            dataIndex: 'products',
            key: 'products',
            width: '20%',
            ...getColumnSearchProps('products'),
        },
        {
            title: 'Phương thức thanh toán',
            dataIndex: 'payment',
            key: 'payment',
            width: '30%',
            ...getColumnSearchProps('payment'),
        },
        {
            title: 'Tổng tiền',
            dataIndex: 'total',
            key: 'total',
            width: '20%',
            ...getColumnSearchProps('total'),
            sorter: (a, b) => a.total - b.total,
            sortDirections: ['descend', 'ascend'],
        },
        {
            title: 'Trạng thái',
            dataIndex: 'status',
            key: 'status',
            width: '20%',
            ...getColumnSearchProps('status'),
        },
    ];

    return (
        <>
            <Table columns={columns} dataSource={arr} />
            <Button type="primary" onClick={() => setModalProduct(true)}>
                Vertically centered modal dialog
            </Button>
            <Modal
                title="Vertically centered modal dialog"
                centered
                open={modalProduct}
                onOk={() => setModalProduct(false)}
            >
                <p>some contents...</p>
                <p>some contents...</p>
                <p>some contents...</p>
            </Modal>
        </>
    )
        ;
};

export default TableAntd;
