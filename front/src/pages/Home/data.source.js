import React from 'react';
import styled from "styled-components";

const HeadImageWrap = styled.div`
  & img{
    width: 180px;
    height: 160px;
    border-radius: 70px;
    margin-bottom: 10px;

  }
`;

export const Nav00DataSource = {
  wrapper: { className: 'header0 home-page-wrapper' },
  page: { className: 'home-page' },
  logo: {
    className: 'header0-logo',
    children: "logo.png",
  },
  Menu: {
    className: 'header0-menu',
    children: [
      {
        name: 'item0',
        className: 'header0-item',
        children: {
          href: '#',
          children: [
            {
              children: (
                <span>
                  <p>产品与服务</p>
                </span>
              ),
              name: 'text',
            },
          ],
        },
      },
      {
        name: 'item1',
        className: 'header0-item',
        children: {
          href: '#',
          children: [
            {
              children: (
                <span>
                  <p>&nbsp;客户介绍</p>
                </span>
              ),
              name: 'text',
            },
          ],
        },
      },
      {
        name: 'item2',
        className: 'header0-item',
        children: {
          href: '#',
          children: [
            {
              children: (
                <span>
                  <p>团队介绍</p>
                </span>
              ),
              name: 'text',
            },
          ],
        },
      },
    ],
  },
  mobileMenu: { className: 'header0-mobile-menu' },
};
export const Banner01DataSource = {
  wrapper: { className: 'banner0' },
  textWrapper: { className: 'banner0-text-wrapper' },
  title: {
    className: 'banner0-title',
    // children: <img src="partners/Machine Learning.jpg" width="50%" alt="img"/>,
  },
  content: {
    className: 'banner0-content',
    children: '湖南锦丰信息科技有限公司',
  },
  button: { className: 'banner0-button', children: 'Learn More' },
};
export const Content00DataSource = {
  wrapper: { className: 'home-page-wrapper content0-wrapper' },
  page: { className: 'home-page content0' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [{ name: 'title', children: '产品与服务' }],
  },
  childWrapper: {
    className: 'content0-block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children:
                'https://zos.alipayobjects.com/rmsportal/WBnVOjtIlGWbzyQivuyq.png',
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: (
                <span>
                  <span>
                    <p>&nbsp;工业数字化</p>
                  </span>
                </span>
              ),
            },
            {
              name: 'content',
              children: (
                <span>
                  <span>
                    <span>
                      <p>
                        帮助产业发现如何利用人工智能等新信息科技将庞大数据转化成降低运营成本、提高客户体验的产品，改变商业模式，开发新盈利点的新一代企业工具
                      </p>
                    </span>
                  </span>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: 'block1',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children:
                'https://zos.alipayobjects.com/rmsportal/YPMsLQuCEXtuEkmXTTdk.png',
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: (
                <span>
                  <p>技术咨询</p>
                </span>
              ),
            },
            {
              name: 'content',
              children: (
                <span>
                  <span>
                    <p>
                      拥有国际一流的研究学者和工程师，为国内、国际知名企业提供组合优化、因果推断及分布式算法等计算与智能领域的相关技术咨询
                    </p>
                  </span>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: 'block2',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children:
                'https://zos.alipayobjects.com/rmsportal/EkXWVvAaFJKCzhMmQYiX.png',
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: '前沿技术培训',
            },
            {
              name: 'content',
              children: '致力于成为世界顶尖的计算智能科研机构，邀请全球知名学者分享各个领域的最新研究进展，已开办一系列的学术讲座、读书会、在线专业论文阅读等活动，可为企业提供人工智能、机器学习及区块链等各种前沿技术培训',
            },
          ],
        },
      },
    ],
  },
};
export const Content50DataSource = {
  wrapper: { className: 'home-page-wrapper content5-wrapper' },
  page: { className: 'home-page content5 kcb94y2epq-editor_css' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <span>
            <p>客户介绍</p>
          </span>
        ),
        className: 'title-h1',
      },
      {
        name: 'content',
        className: 'title-content',
        children: (
          <span>
            <p>&nbsp;合作公司</p>
          </span>
        ),
      },
    ],
  },
  block: {
    className: 'content5-img-wrapper',
    gutter: 32,
    children: [
      {
        name: 'block1',
        className: 'block',
        md: 6,
        xs: 12,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children:
              'partners/中国中车.jpg',
          },
          content: {
            children: (
              <span>
                <p>&nbsp;中国中车</p>
              </span>
            ),
          },
        },
      },
      {
        name: 'block2',
        className: 'block',
        md: 6,
        xs: 12,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children:
              'partners/Binance.jpg',
          },
          content: {
            children: (
              <span>
                <p>&nbsp;币安</p>
              </span>
            ),
          },
        },
      },

    ],
  },
};
export const Teams10DataSource = {
  wrapper: { className: 'home-page-wrapper teams1-wrapper' },
  page: { className: 'home-page teams1' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [{ name: 'title', children: '团队成员' }],
  },
  children: [
    {
      name: 'content',
      className: 'title-content',
      children: (
        <span>
          <p>&nbsp;公司创始人团队成员简介</p>
        </span>
      ),
    },
  ],
  block: {
    className: 'block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'block',
        md: 8,
        xs: 24,
        titleWrapper: {
          children: [
            {
              name: 'image',
              className: 'teams1-image',
              children:
              <HeadImageWrap>
                <img src="partners/王彧弋博士.jpg" />
              </HeadImageWrap>,
            },
            { name: 'title', className: 'teams1-title', children: '王彧弋' },
            {
              name: 'content',
              className: 'teams1-job',
              children: '公司创始人、CEO',
            },
            {
              name: 'content1',
              className: 'teams1-content',
              children:
                ' 男，苏黎世联邦理工大学计算机科学博士，人工智能、区块链专家。师从瑞士著名计算机科学家、苏黎世联邦理工大学教授Roger Wattenhofer ',
            },
          ],
        },
      },
      {
        name: 'block1',
        className: 'block',
        md: 8,
        xs: 24,
        titleWrapper: {
          children: [
            {
              name: 'image',
              className: 'teams1-image',
              children:
              <HeadImageWrap>
              <img src="partners/马鋆溥博士.jpg" />
            </HeadImageWrap>,
            },
            { name: 'title', className: 'teams1-title', children: '马鋆溥' },
            {
              name: 'content',
              className: 'teams1-job',
              children: '联合创始人、CTO',
            },
            {
              name: 'content1',
              className: 'teams1-content',
              children: '男，德国慕尼黑大学计算机科学博士，前西门子高级研究员',
            },
          ],
        },
      },
      {
        name: 'block2',
        className: 'block',
        md: 8,
        xs: 24,
        titleWrapper: {
          children: [
            {
              name: 'image',
              className: 'teams1-image',
              children:
              <HeadImageWrap>
              <img src="partners/陈阳昕.jpg" />
            </HeadImageWrap>,
            },
            { name: 'title', className: 'teams1-title', children: '陈阳昕' },
            {
              name: 'content',
              className: 'teams1-job',
              children: '首席产品设计师',

            },
            {
              name: 'content1',
              className: 'teams1-content',
              children:
                '前苹果公司核心移动产品设计师，曾参与iPhone7核心设计',
            },
          ],
        },
      },
    ],
  },
};
export const Content30DataSource = {
  wrapper: { className: '' },
  page: { className: '' },
  OverPack: { playScale: 0.3 },
  titleWrapper: {
    className: '',
    children: [
      {
        name: '',
        // children: (
          // <span>
          //   <p>&nbsp;团队介绍</p>
          // </span>
        // ),
        className: '',
      },
      {
        name: '',
        className: '',
        // children: (
        //   <span>
        //     <span>
        //       <p>湖南锦丰信息科技有限公司主要创始人介绍</p>
        //     </span>
        //   </span>
        // ),
      },
    ],
  },
  block: {
    className: '',
    children: [

      {
        name: '',
        className: '',
        md: 8,
        xs: 24,
        children: {
          icon: { className: '', children: '' },
          textWrapper: { className: '' },
          title: {
            className: '',
            children: (
              <span>
                <span>
                  <p>
                    <br />
                  </p>
                </span>
              </span>
            ),
          },
          content: {
            className: '',
            children: (
              <span>
                <p>
                  <br />
                </p>
              </span>
            ),
          },
        },
      },
      {
        name: '',
        className: '',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: '',
            // children:
            //   'https://zos.alipayobjects.com/rmsportal/UsUmoBRyLvkIQeO.png',
          },
          textWrapper: { className: '' },
          title: { className: '', },
          content: {
            className: '',
            // children:
            //   '金融级联机交易处理中间件，大规模分布式计算机，数万笔/秒级并发能力，严格保证交易数据统一性。',
          },
        },
      },
      {
        name: '',
        className: '',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: '',
            // children:
            //   'https://zos.alipayobjects.com/rmsportal/ipwaQLBLflRfUrg.png',
          },
          textWrapper: { className: '' },
          title: { className: '', children: '' },
          content: {
            className: '',
            // children:
            //   '一站式、全周期大数据协同工作平台，PB级数据处理、毫秒级数据分析工具。',
          },
        },
      },
     ],
  },
};
export const Footer10DataSource = {
  wrapper: { className: 'home-page-wrapper footer1-wrapper' },
  OverPack: { className: 'footer1', playScale: 0.2 },
  block: {
    className: 'home-page',
    gutter: 0,
    children: [
      {
        name: 'block0',
        xs: 24,
        md: 6,
        className: 'block',
        title: {
          className: 'logo',
          children:
            'https://zos.alipayobjects.com/rmsportal/qqaimmXZVSwAhpL.svg',
        },
        childWrapper: {
          className: 'slogan',
          children: [
            {
              name: 'content0',
              children: 'Animation specification and components of Ant Design.',
            },
          ],
        },
      },
      {
        name: 'block1',
        xs: 24,
        md: 6,
        className: 'block',
        title: { children: '产品' },
        childWrapper: {
          children: [
            { name: 'link0', href: '#', children: '产品更新记录' },
            { name: 'link1', href: '#', children: 'API文档' },
            { name: 'link2', href: '#', children: '快速入门' },
            { name: 'link3', href: '#', children: '参考指南' },
          ],
        },
      },
      {
        name: 'block2',
        xs: 24,
        md: 6,
        className: 'block',
        title: { children: '关于' },
        childWrapper: {
          children: [
            { href: '#', name: 'link0', children: 'FAQ' },
            { href: '#', name: 'link1', children: '联系我们' },
          ],
        },
      },
      {
        name: 'block3',
        xs: 24,
        md: 6,
        className: 'block',
        title: { children: '资源' },
        childWrapper: {
          children: [
            { href: '#', name: 'link0', children: 'Ant Design' },
            { href: '#', name: 'link1', children: 'Ant Motion' },
          ],
        },
      },
    ],
  },
  copyrightWrapper: { className: 'copyright-wrapper' },
  copyrightPage: { className: 'home-page' },
  copyright: {
    className: 'copyright',
    children: (
      <span>
        ©2020 by <a href="https://motion.ant.design">锦丰科技</a> All Rights
        Reserved
      </span>
    ),
  },
};
