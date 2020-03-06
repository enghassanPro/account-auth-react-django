import React from 'react';

export const Error404 = React.lazy(() => {

    return new Promise(resolve => {
        setTimeout(() => resolve(import('../Pages/errors/Error_404')), 3 * 1000)
    })
})
export const RegisterBuilder = React.lazy(() => {

    return new Promise(resolve => {
        setTimeout(() => resolve(import('../Pages/Registration/Register/RegisterBuilder')), 3 * 1000)
    })
})
export const LoginBuilder = React.lazy(() => {

    return new Promise(resolve => {
        setTimeout(() => resolve(import('../Pages/Registration/Login/LoginBuilder')), 3 * 1000)
    })
})
export const ResetPasswordSendBuilder = React.lazy(() => {

    return new Promise(resolve => {
        setTimeout(() => resolve(import('../Pages/Registration/ResetPassword/ResetPasswordMail/ResetPasswordSendBuilder')), 3 * 1000)
    })
})
export const ResetPasswordBuilder = React.lazy(() => {

    return new Promise(resolve => {
        setTimeout(() => resolve(import('../Pages/Registration/ResetPassword/ResetPassword/ResetPasswordBuilder')), 3 * 1000)
    })
})
export const Activate = React.lazy(() => {

    return new Promise(resolve => {
        setTimeout(() => resolve(import('../Pages/Registration/Activate/Activate')), 3 * 1000)
    })
})
export const Index = React.lazy(() => {
    return new Promise(resolve => {
        setTimeout(() => resolve(import('../Pages/Index/Index')), 3 * 1000)
    })
})