package com.goufn.permission.controller;
import com.goufn.permission.common.result.CommonResult;
import com.goufn.permission.model.SysUser;
import com.goufn.permission.jwt.JWTToken;
import com.goufn.permission.jwt.JWTUtil;
import com.goufn.permission.jwt.PermissionProperties;
import com.goufn.permission.service.UserService;
import com.goufn.permission.utils.DateUtil;
import com.goufn.permission.utils.PasswordUtil;
import com.goufn.permission.vo.LoginBean;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;



@RestController
@Slf4j
public class LoginController {

    @Autowired
    private PermissionProperties properties;
    @Autowired
    private UserService userService;


    @PostMapping("login")
    public CommonResult login(@RequestBody LoginBean loginBean, HttpServletRequest request) {
        String username = loginBean.getName();
        String password = loginBean.getPassword();
        // 从session中获取之前保存的验证码跟前台传来的验证码进行匹配

        SysUser user = userService.findByName(username);
        if (user == null) {
            return CommonResult.error("用户名不存在");
        }
        String passwdWithSalt = PasswordUtil.encryptPassword(password, user.getSalt());
        if (!StringUtils.equals(user.getPassword(), passwdWithSalt)) {
            return CommonResult.error("密码错误");
        }
        userService.updateLoginTime(user);
        String token = JWTUtil.sign(username, passwdWithSalt);
        LocalDateTime expireTime = LocalDateTime.now().plusSeconds(properties.getJwtTimeOut());
        String expireTimeStr = DateUtil.formatFullTime(expireTime);
        JWTToken jwtToken = new JWTToken(token, expireTimeStr);
        Map<String, Object> map = new HashMap<>();
        map.put("token", jwtToken.getToken());
        return CommonResult.success("登录成功", map);
    }

    @GetMapping("/logout")
    public CommonResult logout() {
        return CommonResult.success("登出成功");
    }
}
