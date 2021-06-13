import React from "react";
import emailjs from 'emailjs-com';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Form, Input, Typography } from 'antd';
import './ContactPage.css';

const { Title } = Typography;
const { TextArea } = Input;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 5 },
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
function ContactPage(props) {
  const sendEmail = (e) => {
    emailjs.sendForm('service_hcwwato', 'template_v44begs', e.target, 'user_wEAyWHORQDGx0WUrcOYiK');
    alert('문의가 제출되었습니다.');
  }
  return (
    <Formik
      initialValues={{
        title: "",
        email: "",
        content: "",
      }}
      validationSchema={Yup.object().shape({
        title: Yup.string().required("제목을 작성해주세요."),
        email: Yup.string()
          .email("이메일 형식에 맞게 써주세요.")
          .required("이메일을 작성해주세요."),
        content: Yup.string().required("문의 내용을 작성해주세요."),
      })}
    >
      {(props) => {
        const {
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
        } = props;

        return (
          <div style={{ textAlign: 'center' }}>
            <div className="app">
              <div className="contact">
                <Title level={2} style={{paddingLeft: '40px'}}>문의하기</Title>
              </div>
              <Form
                style={{ minWidth: "40%" }}
                {...formItemLayout}
                onSubmit={sendEmail}
              >
                <Form.Item required label="제목">
                  <Input
                    id="title"
                    name="title"
                    placeholder="제목을 입력해주세요."
                    type="text"
                    value={values.title}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.title && touched.title
                        ? "text-input error"
                        : "text-input"
                    }
                  />
                  {errors.title && touched.title && (
                    <div className="input-feedback">{errors.title}</div>
                  )}
                </Form.Item>

                <Form.Item
                  required
                  label="이메일"
                  hasFeedback
                  validateStatus={
                    errors.email && touched.email ? "error" : "success"
                  }
                >
                  <Input
                    id="email"
                    name="email"
                    placeholder="이메일을 입력해주세요."
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.email && touched.email
                        ? "text-input error"
                        : "text-input"
                    }
                  />
                  {errors.email && touched.email && (
                    <div className="input-feedback">{errors.email}</div>
                  )}
                </Form.Item>

                <Form.Item
                  required
                  label="문의사항"
                  hasFeedback
                  validateStatus={
                    errors.content && touched.content ? "error" : "success"
                  }
                >
                  <TextArea
                    id="content"
                    name="content"
                    placeholder="내용을 입력해주세요."
                    value={values.content}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.content && touched.content
                        ? "text-input error"
                        : "text-input"
                    }
                    style={{ height: '200px' }}
                  />
                  {errors.content && touched.content && (
                    <div className="input-feedback">{errors.content}</div>
                  )}
                </Form.Item>

                <Form.Item {...tailFormItemLayout}>
                  <button
                    className="submitBtn"
                    onClick={sendEmail}
                    disabled={isSubmitting}
                    style={{ width: '30%', marginLeft:'-35%'}}
                  >
                    제출
                  </button>
                </Form.Item>
              </Form>
            </div>
          </div>
        );
      }}
    </Formik>
  );
}

export default ContactPage;
