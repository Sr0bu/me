"use client";

import Link from "next/link";
import {useFormState} from "react-dom";
import {registerUserAction} from "@/data/actions/auth-actions";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

import {
    CardTitle,
    CardDescription,
    CardHeader,
    CardContent,
    CardFooter,
    Card,
} from "@/components/ui/card";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";


type SignupFormState = {
    error?: string;
    success?: boolean;
};

const INITIAL_STATE: SignupFormState = {
    error: undefined,
    success: false,
};

export function SignupForm() {
    const [formState, formAction] = useFormState(registerUserAction, INITIAL_STATE);


    return (
        <div className="w-full max-w-md">
            <form action={formAction}>
                <Card>
                    <CardHeader className="space-y-1">
                        <CardTitle className="text-3xl font-bold">Sign Up</CardTitle>
                        <CardDescription>
                            Enter your details to create a new account
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="username">Username</Label>
                            <Input
                                id="username"
                                name="username"
                                type="text"
                                placeholder="username"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="name@example.com"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <Input
                                id="password"
                                name="password"
                                type="password"
                                placeholder="password"
                            />
                        </div>
                    </CardContent>
                    <CardFooter className="flex flex-col">
                        <button type="submit"  className="w-full">Sign Up</button>

                        {formState.error &&(
                         <p className={"mt-2 text-sm text-red-500"}>{formState.error}</p>
                        )}
                        {formState.success && (

                            <div className={"mt-4"}>
                                <Alert>
                                    <AlertTitle className={"text-green-700"}>Registerd</AlertTitle>
                                    <AlertDescription>
                                        You are now ready to Sign in.
                                    </AlertDescription>
                                </Alert>
                            </div>

                        )}


                    </CardFooter>
                </Card>
                <div className="mt-4 text-center text-sm">
                    Have an account?
                    <Link className="underline ml-2" href="signin">
                        Sing In
                    </Link>
                </div>
            </form>
        </div>
    );

}