/* 
 * 菜单管理模块
 */

// 获取导航菜单树
export function findNavTree() {
  const navTreeData = {
    "code": 200,
    "msg": null,
    "data": [{
      "id": 1,
      "createBy": null,
      "createTime": null,
      "lastUpdateBy": null,
      "lastUpdateTime": null,
      "parentId": 0,
      "name": "系统管理",
      "url": null,
      "perms": null,
      "type": 0,
      "icon": "el-icon-setting",
      "orderNum": 0,
      "delFlag": 0,
      "parentName": null,
      "level": 0,
      "children": [{
        "id": 2,
        "createBy": null,
        "createTime": null,
        "lastUpdateBy": null,
        "lastUpdateTime": null,
        "parentId": 1,
        "name": "用户管理",
        "url": "/sys/user",
        "perms": null,
        "type": 1,
        "icon": "el-icon-service",
        "orderNum": 1,
        "delFlag": 0,
        "parentName": "系统管理",
        "level": 1,
        "children": []
      }, {
        "id": 3,
        "createBy": null,
        "createTime": null,
        "lastUpdateBy": null,
        "lastUpdateTime": null,
        "parentId": 1,
        "name": "机构管理",
        "url": "/sys/dept",
        "perms": null,
        "type": 1,
        "icon": "el-icon-news",
        "orderNum": 2,
        "delFlag": 0,
        "parentName": "系统管理",
        "level": 1,
        "children": []
      }, {
        "id": 4,
        "createBy": null,
        "createTime": null,
        "lastUpdateBy": null,
        "lastUpdateTime": null,
        "parentId": 1,
        "name": "角色管理",
        "url": "/sys/role",
        "perms": null,
        "type": 1,
        "icon": "el-icon-view",
        "orderNum": 4,
        "delFlag": 0,
        "parentName": "系统管理",
        "level": 1,
        "children": []
      },{
        "id": 30,
        "createBy": null,
        "createTime": null,
        "lastUpdateBy": null,
        "lastUpdateTime": null,
        "parentId": 28,
        "name": "换皮肤",
        "url": "/demo/theme",
        "perms": null,
        "type": 1,
        "icon": "el-icon-picture",
        "orderNum": 2,
        "delFlag": 0,
        "parentName": "使用案例",
        "level": 1,
        "children": []
      }]
    }]
  }
  return {
    url: 'menu/findNavTree',
    type: 'get',
    data: navTreeData
  }
}

// 获取菜单树
export function findMenuTree() {
  const menuTreeData = {
    "code": 200,
    "msg": null,
    "data": [{
      "id": 1,
      "createBy": null,
      "createTime": null,
      "lastUpdateBy": null,
      "lastUpdateTime": null,
      "parentId": 0,
      "name": "系统管理",
      "url": null,
      "perms": null,
      "type": 0,
      "icon": "el-icon-setting",
      "orderNum": 0,
      "delFlag": 0,
      "parentName": null,
      "level": 0,
      "children": [{
        "id": 2,
        "createBy": null,
        "createTime": null,
        "lastUpdateBy": null,
        "lastUpdateTime": null,
        "parentId": 1,
        "name": "用户管理",
        "url": "/sys/user",
        "perms": null,
        "type": 1,
        "icon": "el-icon-service",
        "orderNum": 1,
        "delFlag": 0,
        "parentName": "系统管理",
        "level": 1,
        "children": [{
          "id": 9,
          "createBy": null,
          "createTime": null,
          "lastUpdateBy": null,
          "lastUpdateTime": null,
          "parentId": 2,
          "name": "查看",
          "url": null,
          "perms": "sys:user:view",
          "type": 2,
          "icon": null,
          "orderNum": 0,
          "delFlag": 0,
          "parentName": "用户管理",
          "level": 2,
          "children": []
        }, {
          "id": 10,
          "createBy": null,
          "createTime": null,
          "lastUpdateBy": null,
          "lastUpdateTime": null,
          "parentId": 2,
          "name": "新增",
          "url": null,
          "perms": "sys:user:add",
          "type": 2,
          "icon": null,
          "orderNum": 0,
          "delFlag": 0,
          "parentName": "用户管理",
          "level": 2,
          "children": []
        }, {
          "id": 11,
          "createBy": null,
          "createTime": null,
          "lastUpdateBy": null,
          "lastUpdateTime": null,
          "parentId": 2,
          "name": "修改",
          "url": null,
          "perms": "sys:user:edit",
          "type": 2,
          "icon": null,
          "orderNum": 0,
          "delFlag": 0,
          "parentName": "用户管理",
          "level": 2,
          "children": []
        }, {
          "id": 12,
          "createBy": null,
          "createTime": null,
          "lastUpdateBy": null,
          "lastUpdateTime": null,
          "parentId": 2,
          "name": "删除",
          "url": null,
          "perms": "sys:user:delete",
          "type": 2,
          "icon": null,
          "orderNum": 0,
          "delFlag": 0,
          "parentName": "用户管理",
          "level": 2,
          "children": []
        }]
      }, {
        "id": 3,
        "createBy": null,
        "createTime": null,
        "lastUpdateBy": null,
        "lastUpdateTime": null,
        "parentId": 1,
        "name": "机构管理",
        "url": "/sys/dept",
        "perms": null,
        "type": 1,
        "icon": "el-icon-news",
        "orderNum": 2,
        "delFlag": 0,
        "parentName": "系统管理",
        "level": 1,
        "children": [{
          "id": 13,
          "createBy": null,
          "createTime": null,
          "lastUpdateBy": null,
          "lastUpdateTime": null,
          "parentId": 3,
          "name": "查看",
          "url": null,
          "perms": "sys:dept:view",
          "type": 2,
          "icon": null,
          "orderNum": 0,
          "delFlag": 0,
          "parentName": "机构管理",
          "level": 2,
          "children": []
        }, {
          "id": 14,
          "createBy": null,
          "createTime": null,
          "lastUpdateBy": null,
          "lastUpdateTime": null,
          "parentId": 3,
          "name": "新增",
          "url": null,
          "perms": "sys:dept:add",
          "type": 2,
          "icon": null,
          "orderNum": 0,
          "delFlag": 0,
          "parentName": "机构管理",
          "level": 2,
          "children": []
        }, {
          "id": 15,
          "createBy": null,
          "createTime": null,
          "lastUpdateBy": null,
          "lastUpdateTime": null,
          "parentId": 3,
          "name": "修改",
          "url": null,
          "perms": "sys:dept:edit",
          "type": 2,
          "icon": null,
          "orderNum": 0,
          "delFlag": 0,
          "parentName": "机构管理",
          "level": 2,
          "children": []
        }, {
          "id": 16,
          "createBy": null,
          "createTime": null,
          "lastUpdateBy": null,
          "lastUpdateTime": null,
          "parentId": 3,
          "name": "删除",
          "url": null,
          "perms": "sys:dept:delete",
          "type": 2,
          "icon": null,
          "orderNum": 0,
          "delFlag": 0,
          "parentName": "机构管理",
          "level": 2,
          "children": []
        }]
      }, {
        "id": 4,
        "createBy": null,
        "createTime": null,
        "lastUpdateBy": null,
        "lastUpdateTime": null,
        "parentId": 1,
        "name": "角色管理",
        "url": "/sys/role",
        "perms": null,
        "type": 1,
        "icon": "el-icon-view",
        "orderNum": 4,
        "delFlag": 0,
        "parentName": "系统管理",
        "level": 1,
        "children": [{
          "id": 17,
          "createBy": null,
          "createTime": null,
          "lastUpdateBy": null,
          "lastUpdateTime": null,
          "parentId": 4,
          "name": "查看",
          "url": null,
          "perms": "sys:role:view",
          "type": 2,
          "icon": null,
          "orderNum": 0,
          "delFlag": 0,
          "parentName": "角色管理",
          "level": 2,
          "children": []
        }, {
          "id": 18,
          "createBy": null,
          "createTime": null,
          "lastUpdateBy": null,
          "lastUpdateTime": null,
          "parentId": 4,
          "name": "新增",
          "url": null,
          "perms": "sys:role:add",
          "type": 2,
          "icon": null,
          "orderNum": 0,
          "delFlag": 0,
          "parentName": "角色管理",
          "level": 2,
          "children": []
        }, {
          "id": 19,
          "createBy": null,
          "createTime": null,
          "lastUpdateBy": null,
          "lastUpdateTime": null,
          "parentId": 4,
          "name": "修改",
          "url": null,
          "perms": "sys:role:edit",
          "type": 2,
          "icon": null,
          "orderNum": 0,
          "delFlag": 0,
          "parentName": "角色管理",
          "level": 2,
          "children": []
        }, {
          "id": 20,
          "createBy": null,
          "createTime": null,
          "lastUpdateBy": null,
          "lastUpdateTime": null,
          "parentId": 4,
          "name": "删除",
          "url": null,
          "perms": "sys:role:delete",
          "type": 2,
          "icon": null,
          "orderNum": 0,
          "delFlag": 0,
          "parentName": "角色管理",
          "level": 2,
          "children": []
        }]
      }, {
        "id": 30,
        "createBy": null,
        "createTime": null,
        "lastUpdateBy": null,
        "lastUpdateTime": null,
        "parentId": 28,
        "name": "换皮肤",
        "url": "/demo/theme",
        "perms": null,
        "type": 1,
        "icon": "el-icon-picture",
        "orderNum": 2,
        "delFlag": 0,
        "parentName": "使用案例",
        "level": 1,
        "children": []
      }]
    }]
  }
  return {
    url: 'menu/findMenuTree',
    type: 'get',
    data: menuTreeData
  }
}

export function setParentName(data) {
  if(data == null) {
    return
  }
  let len = data.length
  for(let i=0; i<len; i++) {
    let menu = data[i]
    menu.parentName = 'menu' + menu.parentId
    if(menu.children != null) {
      setParentName(menu.children)
    }
  }
}

