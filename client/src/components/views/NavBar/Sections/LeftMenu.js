import React from 'react';
import { Menu } from 'antd';
const SubMenu = Menu.SubMenu;

function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
    <SubMenu title={<span>이용 안내</span>}>
        <Menu.Item key="setting:0">
        <a href="/information">▶ 이용 안내</a>
        </Menu.Item>
        <Menu.Item key="setting:1">
        <a href="/developer">▶ 개발자 소개</a>
        </Menu.Item>
    </SubMenu>
    <SubMenu title={<span>토론의 장</span>}>
        <Menu.Item key="setting:1">
          <a href="/discussion/ongoing">▶ 진행중인 토론</a>
          </Menu.Item>
        <Menu.Item key="setting:2">
        <a href="/discussion/complete">▶ 지난 토론</a>
        </Menu.Item>
        <Menu.Item key="setting:3">
          <a href="/discussion/more">▶ 토론 주제 보기</a>
        </Menu.Item>
    </SubMenu>
    <SubMenu title={<span>문의하기</span>}>
        <Menu.Item key="setting:5">
          <a href="/contact">▶ 문의하기</a></Menu.Item>
    </SubMenu>
  </Menu>
  )
}

export default LeftMenu