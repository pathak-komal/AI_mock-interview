"use client";
import { useRouter } from "next/navigation";
import { z } from "zod";
import Image from "next/image";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { toast } from "sonner";
import FormField from "@/components/FormField";

type FormType = "sign-in" | "sign-up";

// Schema to define the form validation
const authFormSchema = (type: FormType) =>
  z.object({
    name:
      type === "sign-up"
        ? z.string().min(3, "Name is required")
        : z.string().optional(),
    email: z.string().email("Invalid email"),
    password: z.string().min(3, "Password too short"),
  });

const Authform = ({ type }: { type: FormType }) => {
  const router = useRouter();
  const formSchema = authFormSchema(type);
  const isSignin = type === "sign-in";

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  // Handle form submission
  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      console.log(values); // Log values to check if everything is correct
      if (type === "sign-up") {
        toast.success("Account created successfully. Please sign in.");
        setTimeout(() => {
          router.push("/sign-in");
        }, 1000);
      } else {
        toast.success("Sign in successfully.");
        setTimeout(() => {
          router.push("/");
        }, 1000);
      }
    } catch (error) {
      console.log(error);
      toast.error(`There was an error: ${error}`);
    }
  }

  return (
    <div className="card-border lg:min-w-[566px]">
      <div className="flex flex-col gap-6 card py-14 px-10">
        <div className="flex flex-row gap-2 justify-center">
          <Image src="/logo.svg" alt="logo" height={32} width={38} />
          <h2 className="text-primary-100">PrepView</h2>
        </div>
        <h3>Practice job interview with AI</h3>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full space-y-6 mt-4 form"
          >
            {!isSignin && (
              <FormField
                control={form.control}
                name="name"
                label="Name"
                placeholder="Enter your name"
              />
            )}
            <FormField
              control={form.control}
              name="email"
              label="E-mail"
              placeholder="Enter your E-mail"
              type="email"
            />
            <FormField
              control={form.control}
              name="password"
              label="Password"
              placeholder="Enter your password"
              type="password"
            />

            <Button className="btn" type="submit">
              {isSignin ? "Sign in" : "Create an Account"}
            </Button>
          </form>
        </Form>

        <p className="text-center">
          {isSignin ? "No Account yet?" : "Have an account already?"}
          <Link
            href={isSignin ? "/sign-up" : "/sign-in"}
            className="font-bold text-user-primary ml-1"
          >
            {isSignin ? "Sign up" : "Sign in"}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Authform;
