import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import "./RHFExample.css";

/* -----------------------------
   Zod Schema
-------------------------------- */
const formSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().optional(),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),

  phone: z
    .string()
    .optional()
    .refine((val) => !val || /^[0-9]{10}$/.test(val), {
      message: "Phone must be 10 digits",
    }),

  website: z.string().url("Invalid URL").optional(),
  bio: z.string().max(200, "Bio cannot exceed 200 characters").optional(),

  acceptTerms: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms",
  }),
});

/* -----------------------------
   Component
-------------------------------- */
export default function RHFExample() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      lastName: "",
      phone: "",
      website: "",
      bio: "",
      acceptTerms: false,
    },
  });

  const onSubmit = (data) => {
    console.log("Submitted data:", data);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        {/* First Name */}
        <div className="form-group">
          <label>First Name *</label>
          <input
            {...register("firstName")}
            className={errors.firstName ? "input-error" : ""}
          />
          {errors.firstName && (
            <p className="error-text">{errors.firstName.message}</p>
          )}
        </div>

        {/* Last Name */}
        <div className="form-group">
          <label>Last Name</label>
          <input {...register("lastName")} />
        </div>

        {/* Email */}
        <div className="form-group">
          <label>Email *</label>
          <input
            {...register("email")}
            className={errors.email ? "input-error" : ""}
          />
          {errors.email && <p className="error-text">{errors.email.message}</p>}
        </div>

        {/* Password */}
        <div className="form-group">
          <label>Password *</label>
          <input
            type="password"
            {...register("password")}
            className={errors.password ? "input-error" : ""}
          />
          {errors.password && (
            <p className="error-text">{errors.password.message}</p>
          )}
        </div>

        {/* Phone */}
        <div className="form-group">
          <label>Phone</label>
          <input
            {...register("phone")}
            className={errors.phone ? "input-error" : ""}
          />
          {errors.phone && <p className="error-text">{errors.phone.message}</p>}
        </div>

        {/* Website */}
        <div className="form-group">
          <label>Website</label>
          <input
            {...register("website")}
            className={errors.website ? "input-error" : ""}
          />
          {errors.website && (
            <p className="error-text">{errors.website.message}</p>
          )}
        </div>

        {/* Bio */}
        <div className="form-group">
          <label>Bio</label>
          <textarea
            {...register("bio")}
            className={errors.bio ? "input-error" : ""}
          />
          {errors.bio && <p className="error-text">{errors.bio.message}</p>}
        </div>

        {/* Accept Terms */}
        <div className="form-group">
          <label className="checkbox-label">
            <input type="checkbox" {...register("acceptTerms")} />
            Accept Terms *
          </label>
          {errors.acceptTerms && (
            <p className="error-text">{errors.acceptTerms.message}</p>
          )}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
