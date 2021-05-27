import React from 'react';
import { Menu } from 'antd';
const SubMenu = Menu.SubMenu;

function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
    <SubMenu title={<span>이용 안내</span>}>
        <Menu.Item key="setting:0">▶ 이용 안내</Menu.Item>
        <Menu.Item key="setting:1">▶ 개발자 소개</Menu.Item>
    </SubMenu>
    <SubMenu title={<span>토론의 장</span>}>
        <Menu.Item key="setting:1">▶ 진행중인 토론</Menu.Item>
        <Menu.Item key="setting:2">▶ 지난 토론</Menu.Item>
        <Menu.Item key="setting:3">
          <a href="/discussion/apply">▶ 토론 주제 신청</a>
        </Menu.Item>
    </SubMenu>
    <SubMenu title={<span>문의하기</span>}>
        <Menu.Item key="setting:5">▶ 문의하기</Menu.Item>
    </SubMenu>
  </Menu>
  )
}

export default LeftMenu