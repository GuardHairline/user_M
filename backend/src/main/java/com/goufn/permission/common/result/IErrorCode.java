package com.goufn.permission.common.result;

/**
 * 封装API的错误码
 */
public interface IErrorCode {
    /**
     * 返回错误吗
     * @return
     */
    int getCode();

    /**
     * 返回错误信息
     * @return
     */
    String getMessage();
}

