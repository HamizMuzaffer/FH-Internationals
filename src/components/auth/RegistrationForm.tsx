import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Loader2 } from "lucide-react";
import { signupSchema } from "@/schemas/signupSchema";
import axiosInstance from "@/axios";
import toast from "react-hot-toast";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const RegistrationForm = () => {
  type FormValues = z.infer<typeof signupSchema>;
  const [isShow, setIsShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      email: "",
      password: "",
      username: "",
      contact: "",
      city: "",
      info: "",
      service: "",
    },
  });

  const submitHandler = async (values: FormValues) => {
    setLoading(true);
    const formData = values;
    try {
      const response = await axiosInstance.post(`/auth/register`, formData);

      if (response.status === 200) {
        toast.success("Login Successfull");
      }
    } catch (error: any) {
      console.log("Login Error", error?.response?.data?.message);
      toast.error(error?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };
  const toggleShow = () => {
    setIsShow(!isShow);
  };

  return (
    <Form {...form}>
    <form onSubmit={form.handleSubmit(submitHandler)} className="max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Email Field */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="m@example.com" {...field} className="w-full" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Password Field */}
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input
                    placeholder="Enter password"
                    type={isShow ? "text" : "password"}
                    {...field}
                    className="w-full"
                  />
                  {isShow ? (
                    <EyeOff
                      onClick={toggleShow}
                      className="absolute right-3 top-2.5 h-4 w-4 cursor-pointer text-muted-foreground"
                    />
                  ) : (
                    <Eye
                      onClick={toggleShow}
                      className="absolute right-3 top-2.5 h-4 w-4 cursor-pointer text-muted-foreground"
                    />
                  )}
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Username Field */}
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="husbanali" {...field} className="w-full" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Contact Field */}
        <FormField
          control={form.control}
          name="contact"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Contact</FormLabel>
              <FormControl>
                <Input placeholder="923312893020" type="number" {...field} className="w-full" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* City Field */}
        <FormField
          control={form.control}
          name="city"
          render={({ field }) => (
            <FormItem>
              <FormLabel>City</FormLabel>
              <FormControl>
                <Input placeholder="Karachi" type="text" {...field} className="w-full" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Service Type Field */}
        <FormField
          control={form.control}
          name="service"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Service Type</FormLabel>
              <FormControl>
                <Select
                  onValueChange={(value) => form.setValue("service", value)}
                  value={field.value}
                >
                  <SelectTrigger className="w-full"> {/* Full width select trigger */}
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="Parcel">Parcel</SelectItem>
                      <SelectItem value="International Shipping">
                        International Shipping
                      </SelectItem>
                      <SelectItem value="Cash on Delivery">
                        Cash on Delivery
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      {/* Submit Button */}
      <div className="flex items-center justify-center">
        <Button
          disabled={loading}
          className="py-6 my-4 px-6 font-Ubuntu font-bold w-full"
          type="submit"
        >
          {loading ? (
            <span className="flex w-full items-center justify-center">
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            </span>
          ) : (
            "Submit"
          )}
        </Button>
      </div>
    </form>
  </Form>
  );
};

export default RegistrationForm;
