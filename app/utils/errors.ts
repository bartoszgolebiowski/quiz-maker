import { json } from "@remix-run/node";
import { z } from "zod";

export const formatErrors = <T extends object>(error: z.ZodError<T>): {
    field: string,
    errors: string[],
}[] => {
    const errors = error.formErrors.fieldErrors;
    return Object.keys(errors).map((key) => ({
        field: key as string,
        errors: errors[key as keyof typeof errors] as string[],
    }));
}

export const extractErrors = (field: string, error?: {
    field: string,
    errors: string[],
}[] | undefined): string => {
    if (!error) return "";
    return error
        .filter((error) => error.field === field)
        .map((error) => error.errors)
        .join("\n");
}

export const error500 = (message?: string, formattedErrors?: ReturnType<typeof formatErrors>) => {
    return json({
        type: "error" as const,
        message: message ?? "Something went wrong",
        formattedErrors,
    }, {
        status: 500,
    })
}

export const error400 = (message: string, formattedErrors?: ReturnType<typeof formatErrors>) => {
    return json({
        type: "error" as const,
        message,
        formattedErrors,
    }, {
        status: 400,
    })
}

export const error401 = (message?: string, formattedErrors?: ReturnType<typeof formatErrors>) => {
    return json({
        type: "error" as const,
        message: message ?? "Unauthorized",
        formattedErrors,
    }, {
        status: 401,
    })
}

export const error404 = (message: string, formattedErrors?: ReturnType<typeof formatErrors>) => {
    return json({
        type: "error" as const,
        message,
        formattedErrors,
    }, {
        status: 404,
    })
}

export const error409 = (message: string, formattedErrors?: ReturnType<typeof formatErrors>) => {
    return json({
        type: "error" as const,
        message,
        formattedErrors,
    }, {
        status: 409,
    })
}