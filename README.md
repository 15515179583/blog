# smile小站

类型：个人博客<br>
作者：smile<br>
网址：[http://smile6666.com/](http://smile6666.com/)<br>
说明：博客可提供给需要的小伙伴下载，希望能在博客友链添加本站地址<br>
图片展示：![网站展示](http://smile6666.com/upload/26ce046fa47b210211f11273f975056f.png)

## 开发技术

- Node
  - ejs
  - express
  - express-session
- mysql

## 开发环境
- window7
- vsCode

## 项目结构
blog
  │  .gitattributes
  │  index.js
  │  package-lock.json
  │  package.json
  │  README.md
  │  
  ├─middleware 中间件目录
  │      about.js
  │      article.js
  │      auth.js
  │      category.js
  │      gbook.js
  │      links.js
  │      photos.js
  │      project.js
  │      pv.js
  │      tabs.js
  │      user.js
  │      website.js
  │      
  ├─model 数据模型目录
  │      about.js
  │      article.js
  │      category.js
  │      gbook.js
  │      links.js
  │      model.js
  │      photos.js
  │      project.js
  │      pv.js
  │      tabs.js
  │      user.js
  │      website.js
  │      
  ├─router 路由目录
  │  │  about.js
  │  │  article.js
  │  │  gbook.js
  │  │  index.js
  │  │  project.js
  │  │  search.js
  │  │  share.js
  │  │  user.js
  │  │  
  │  └─admin
  │          about.js
  │          account.js
  │          article.js
  │          category.js
  │          index.js
  │          links.js
  │          log.js
  │          photos.js
  │          project.js
  │          users.js
  │          website.js
  │          
  ├─static 静态资源目录
  │  ├─admin
  │  │  │  
  │  │  ├─css
  │  │  │      
  │  │  ├─img
  │  │  │      
  │  │  └─js
  │  │                  
  │  ├─css
  │  │      
  │  ├─images
  │  │          
  │  └─js
  │          
  └─views 视图目录
      │  about.html
      │  dashang.html
      │  footer.html
      │  gbook.html
      │  header.html
      │  index.html
      │  info.html
      │  infopic.html
      │  list.html
      │  login.html
      │  l_about.html
      │  l_guanzhu.html
      │  l_photos.html
      │  projects.html
      │  share.html
      │  
      └─admin
          │  alert.html
          │  header.html
          │  index.html
          │  navs.html
          │  
          ├─about
          │      index.html
          │      
          ├─account
          │      index.html
          │      link.html
          │      
          ├─article
          │      add.html
          │      edit.html
          │      index.html
          │      
          ├─category
          │      index.html
          │      
          ├─links
          │      index.html
          │      
          ├─log
          │      index.html
          │      
          ├─photos
          │      add.html
          │      edit.html
          │      index.html
          │      
          ├─project
          │      add.html
          │      edit.html
          │      index.html
          │      
          ├─users
          │      index.html
          │      
          └─website
                  index.html
                    
