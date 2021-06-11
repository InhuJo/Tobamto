import React, { useEffect, useState } from "react";
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from "react-redux";
import { Form, Input, Typography, message } from 'antd';
import axios from 'axios';
import { USER_SERVER } from '../../Config';

const { Title } = Typography;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 7 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

function EditInfoPage(props) {

  const userId = localStorage.getItem('userId');
  const variable = { userId:userId };

  const [UserEmail, setUserEmail] = useState('');
  const [UserName, setUserName] = useState('');

  useEffect(() => {
    
    axios.post('/api/users/info', variable)
    .then(response => {
      if(response.data.success) {
        setUserEmail(response.data.userInfo.email);
        setUserName(response.data.userInfo.name);
      } else {
        alert('info edit fail')
      }
    })
  }, [])

  return (

    <Formik
      initialValues={{
        email: '',
        name: '',
        password: '',
        confirmPassword: ''
      }}
      
      validationSchema={Yup.object().shape({
        password: Yup.string()
          .min(6, '비밀번호는 6자리 이상이어야 합니다')
          .required('비밀번호를 입력해주세요'),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref('password'), null], '비밀번호가 일치하지 않습니다')
          .required('비밀번호를 한번 더 입력해주세요')
      })}

      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          let dataToSubmit = {
            userId: userId,
            password: values.password,
          };

          axios.post('/api/users/edit', dataToSubmit)
          .then(response => {
            if(response.data.success) {
              message.success('사용자 정보 수정이 완료되었습니다. 다시 로그인 해주세요.');
              axios.get(`${USER_SERVER}/logout`).then(response => {
                if (response.status === 200) {
                  props.history.push("/login");
                } else {
                  alert('Log Out Failed')
                }
              });
            }
          })
          setSubmitting(false);
        }, 500);
      }}
    >
      {props => {
        const {
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
          handleReset,
        } = props;
        return (
          <div>
            <div className="app">
              <div className="register"><Title level={2}>비밀번호 수정</Title></div>
              <Form style={{ minWidth: '375px' }} {...formItemLayout} onSubmit={handleSubmit} >

                <Form.Item required label="닉네임">
                  <Input
                    id="name"
                    disabled={true}
                    type="text"
                    value={UserName}
                    onBlur={handleBlur}
                    className={
                      errors.name && touched.name ? 'text-input error' : 'text-input'
                    }
                  />
                  {errors.name && touched.name && (
                    <div className="input-feedback">{errors.name}</div>
                  )}
                </Form.Item>

                <Form.Item required label="이메일" hasFeedback validateStatus={errors.email && touched.email ? "error" : 'success'}>
                  <Input
                    id="email"
                    type="email"
                    disabled={true}
                    value={UserEmail}
                    onBlur={handleBlur}
                    className={
                      errors.email && touched.email ? 'text-input error' : 'text-input'
                    }
                  />
                  {errors.email && touched.email && (
                    <div className="input-feedback">{errors.email}</div>
                  )}
                </Form.Item>

                <Form.Item required label="비밀번호" hasFeedback validateStatus={errors.password && touched.password ? "error" : 'success'}>
                  <Input
                    id="password"
                    placeholder="Enter your new password"
                    type="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.password && touched.password ? 'text-input error' : 'text-input'
                    }
                  />
                  {errors.password && touched.password && (
                    <div className="input-feedback">{errors.password}</div>
                  )}
                </Form.Item>

                <Form.Item required label="비밀번호 확인" hasFeedback>
                  <Input
                    id="confirmPassword"
                    placeholder="Enter your new password for confirm"
                    type="password"
                    value={values.confirmPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.confirmPassword && touched.confirmPassword ? 'text-input error' : 'text-input'
                    }
                  />
                  {errors.confirmPassword && touched.confirmPassword && (
                    <div className="input-feedback">{errors.confirmPassword}</div>
                  )}
                </Form.Item>

                <Form.Item {...tailFormItemLayout}>
                  <button className="submitBtn" onClick={handleSubmit} disabled={isSubmitting}>
                    수정하기
                </button>
                </Form.Item>
              </Form>
            </div>
          </div>
        );
      }}
    </Formik>
  );
};


export default EditInfoPage
