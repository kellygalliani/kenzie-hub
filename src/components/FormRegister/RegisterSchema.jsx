import * as yup from "yup"

export const RegisterSchema = yup.object().shape({
    name: yup.string().required("O nome é obrigatório").min(3, "O nome precisa de pelo menos 3 caracteres").max(100, "Insira no máximo 100 caracteres"),
    email: yup.string().required("O e-mail é obrigatório").email("Insira um e-mail válido"),
    password: yup
        .string()
        .required("A senha é obrigatória")
        .min(8, "É necessário uma senha de no mínimo 8 caracteres")
        .matches(/(?=.*?[a-z])/, "É necessário uma letra minúscula")
        .matches(/(?=.*?[A-Z])/, "É necessário uma letra maiúscula")
        .matches(/(?=.*?[0-9])/, "É necessário ao menos um número")
        .matches(/(?=.*?[#?!@$%^&*-])/, "É necessário ao menos um caracter especial"),
    
    confirmPassword: yup
        .string()
        .required("Confirme a sua senha")
        .oneOf([yup.ref("password"), null], "As senhas devem ser iguais"),
    bio: yup.string().required("Campo obrigatório"),
    contact: yup.string().required("Campo obrigatório"),
    course_module: yup.string().required("Selecione um módulo"), 
})