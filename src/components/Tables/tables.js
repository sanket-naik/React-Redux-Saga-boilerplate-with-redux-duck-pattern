

import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Table, Radio, Divider } from 'antd';
import Axios from 'axios';
import './table.css'
import TableView from './TableView';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    sorter: true,
    render: name => <a>{`${name.first} ${name.last}`}</a>,
    width: '20%',
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    filters: [
      { text: 'Male', value: 'male' },
      { text: 'Female', value: 'female' },
    ],
    width: '20%',
  },
  {
    title: 'Email',
    dataIndex: 'email',
  },
];

const getRandomuserParams = params => {
  return {
    results: params.pagination.pageSize,
    page: params.pagination.current,
    ...params,
  };
};

export default class tables extends React.Component {
  state = {
    data: [],
    pagination: {
      current: 1,
      pageSize: 10,
    },
    loading: false,
    selected:""
  };

  componentDidMount() {
    const { pagination } = this.state;
    this.fetch({ pagination });
  }

  handleTableChange = (pagination, filters, sorter) => {
    this.fetch({
      sortField: sorter.field,
      sortOrder: sorter.order,
      pagination,
      ...filters,
    });
  };

  fetch = (params = {}) => {
    this.setState({ loading: true });
    Axios({
      url: 'https://randomuser.me/api',
      method: 'get',
      type: 'json',
      params: {
        results: params.pagination.pageSize,
        page: params.pagination.current,
      }
    }).then(dt => {
        const{data}=dt;
      console.log(data);
      this.setState({
        loading: false,
        data: data.results,
        pagination: {
          ...params.pagination,
          total: 200,
          // 200 is mock data, you should read it from server
          // total: data.totalCount,
        },
      });
    });
  };

 rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: (record) => ({
      disabled: record.name === 'Disabled User',
      name: record.name,
    }),
  };


  render() {
    const { data, pagination, loading } = this.state;
    return (
        <>
      {/* <Divider/> */}

      <Table
        columns={columns}
        rowSelection={{
            type: "checkbox",
            ...this.rowSelection,
          }}
        rowKey={record => record.login.uuid}
        dataSource={data}
        pagination={pagination}
        loading={loading}
        onRow={(record, index) => ({
            onClick: (event) => { 
                this.setState({selected:{...record, index}})
             } 
          })}
        onChange={this.handleTableChange}
      />

    <TableView dataSource={data} selected={this.state.selected}/>
    
      </>
    );
  }
}