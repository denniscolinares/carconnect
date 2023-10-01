"use strict";

import React, { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";

import {Button, Table, Space, Modal, Form, Input} from 'antd';
import { DeleteFilled, DeleteTwoTone } from '@ant-design/icons';

import axios from 'axios';
import _ from 'lodash';

import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();
const { API_BASE_URL, NODE_BASE_URL } = publicRuntimeConfig;


import styles from "@/styles/pages/homepage.module.scss";
const HomePage = (props) => {
	axios.defaults.baseURL = API_BASE_URL;
	
	const { pageData } = props;
	const { TextArea } = Input;
	
	const [form] = Form.useForm();
	
	const [data, setData] = useState([]);
	const [open, setOpen] = useState(false);
	
	useEffect(() => {
		setData(pageData);
		console.info("First Refresh");
	}, []);
	
	const getResetData = async () => {
		let aData;
		
		try {
			aData = await axios.get('reset');
		} catch (err) {
			aData.data = [];
		}
		
		setData(aData.data);
	};
	
	const addNewRecord = async (values) => {
		let aData = {
			data: []
		};
		
		try {
			values.key = String(Math.random()+(new Date().valueOf()));
			aData = await axios.post('add', values, {
				headers: {
					'Content-Type': 'application/json'
				}
			});
		} catch (err) {
			aData.data = [];
		}
		
		if (aData.data.length > 0) {
			let prevData = data;
			prevData.push(aData.data[0]);
			setData(prevData);
			setOpen(false);
		}
	};
	
	const deleteRecord = async (values) => {
		let aData = {
			data: []
		};
		
		try {
			aData = await axios.delete('delete/'+values);
		} catch (err) {
			aData.data = [];
		}
		
		if (aData.data.length > 0) {
			let prevData = data;
			
			setData(_.filter(prevData, (o)=>{
				return o.key !== aData.data[0];
			}));
		}
	};
	
	const columns = [
		{
			title: 'First Name',
			dataIndex: 'fname',
			key: 'key',
		},
		{
			title: 'Last Name',
			dataIndex: 'lname',
			key: 'key',
		},
		{
			title: 'Mobile',
			dataIndex: 'mobile',
			key: 'key',
		},
		{
			title: 'Email Address',
			dataIndex: 'email',
			key: 'email',
		},
		{
			title: 'Action',
			dataIndex: '',
			fixed: 'right',
			width: 100,
			key: 'key',
			render: (e) => (
					<a>
						<DeleteTwoTone onClick={deleteRecord.bind(this, e.key)} />
					</a>
			),
		},
	];
	
	return (
			<Fragment>
				<main className={styles.HomePage}>
					<div className={styles.content}>
						<Space wrap className="mt-10 mb-3">
							<Button
									type="primary"
									onClick={()=>{
										setOpen(true);
									}}>
								Add New
							</Button>
							<Button
									onClick={getResetData}>
								Reset Data
							</Button>
						</Space>
						
						<Table
								columns={columns}
								dataSource={[...data]}
						/>
					</div>
					
					<Modal
							title="Add New"
							open={open}
							okText="Submit"
							onOk={() => {
								form.validateFields()
										.then((values) => {
											form.resetFields();
											addNewRecord(values);
										})
										.catch((info) => {
											console.log('Validate Failed:', info);
										});
							}}
							onCancel={() => {
								setOpen(false);
							}}
					>
						<Form
								form={form}
								layout="vertical"
								name={"personinfo-form"}
						>
							<Form.Item
									label="First Name"
									name="fname"
									rules={[
										{
											required: true,
											message: 'Please input your First Name!',
										},
									]}
							>
								<Input />
							</Form.Item>
							<Form.Item
									label="Last Name"
									name="lname"
									rules={[
										{
											required: true,
											message: 'Please input your Last Name!',
										},
									]}
							>
								<Input />
							</Form.Item>
							<Form.Item
									label="Mobile"
									name="mobile"
									rules={[
										{
											required: false,
											message: 'Please input your mobile!',
										},
									]}
							>
								<Input />
							</Form.Item>
							<Form.Item
									label="Email"
									name="email"
									rules={[
										{
											required: false,
											message: 'Please input your email!',
										},
									]}
							>
								<Input />
							</Form.Item>
							<Form.Item
									label="Description"
									name="description"
									rules={[
										{
											required: false,
											message: 'Provide description of the person',
										},
									]}
							>
								<TextArea rows={6}/>
							</Form.Item>
						</Form>
					</Modal>
					
				</main>
			</Fragment>
	)
};

HomePage.getInitialProps = async (ctx) => {
	const { req, res, query } = await ctx;
	let aData;
	
	axios.defaults.baseURL = API_BASE_URL;
	
	try {
		aData = await axios.get('reset');
	} catch (err) {
		aData.data = [];
	}
	
	return {
	  pageData: aData.data
	};
};

HomePage.defaultProps = {
	pageData: [],
};

HomePage.propTypes = {
	pageData: PropTypes.array.isRequired
};

export default HomePage;
