import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { CheckCircle2 } from "lucide-react";

const formSchema = z.object({
  patientName: z.string().min(2, "Patient name must be at least 2 characters").max(100),
  patientPhone: z.string().min(10, "Please enter a valid phone number").max(20),
  patientEmail: z.string().email("Please enter a valid email address").max(255),
  referringParty: z.string().min(2, "Referring party name is required").max(100),
  referringPhone: z.string().min(10, "Please enter a valid phone number").max(20),
  referringEmail: z.string().email("Please enter a valid email address").max(255),
  specialty: z.string().min(1, "Please select a specialty"),
  injuryType: z.string().min(5, "Please describe the injury").max(500),
  additionalNotes: z.string().max(1000).optional(),
});

type FormData = z.infer<typeof formSchema>;

const ReferralForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      patientName: "",
      patientPhone: "",
      patientEmail: "",
      referringParty: "",
      referringPhone: "",
      referringEmail: "",
      specialty: "",
      injuryType: "",
      additionalNotes: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    try {
      const { supabase } = await import("@/integrations/supabase/client");
      
      const { error } = await supabase.functions.invoke("send-referral-email", {
        body: {
          patientName: data.patientName,
          patientPhone: data.patientPhone,
          patientEmail: data.patientEmail,
          dateOfInjury: new Date().toLocaleDateString(),
          injuryType: data.injuryType,
          referringName: data.referringParty,
          referringCompany: data.referringParty,
          referringPhone: data.referringPhone,
          referringEmail: data.referringEmail,
          notes: data.additionalNotes,
        },
      });

      if (error) throw error;

      setIsSubmitted(true);
      toast.success("Referral submitted successfully! We'll contact you shortly.");
      form.reset();
    } catch (error) {
      console.error("Error submitting referral:", error);
      toast.error("Failed to submit referral. Please try again or contact us directly.");
    }
  };

  if (isSubmitted) {
    return (
      <Card className="text-center py-8">
        <CardContent className="space-y-6">
          <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
            <CheckCircle2 className="w-10 h-10 text-primary-foreground" />
          </div>
          <h3 className="text-2xl font-bold">Referral Submitted!</h3>
          <p className="text-muted-foreground">
            Thank you for your referral. Our team will review the information and contact you within 24 hours.
          </p>
          <Button onClick={() => setIsSubmitted(false)}>Submit Another Referral</Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Referral Information</CardTitle>
        <CardDescription>
          Please provide detailed information about the patient and their injury
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Patient Information</h3>
              
              <FormField
                control={form.control}
                name="patientName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Patient Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="patientPhone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Patient Phone</FormLabel>
                      <FormControl>
                        <Input placeholder="(555) 123-4567" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="patientEmail"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Patient Email</FormLabel>
                      <FormControl>
                        <Input placeholder="patient@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Your Information</h3>
              
              <FormField
                control={form.control}
                name="referringParty"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Name / Organization</FormLabel>
                    <FormControl>
                      <Input placeholder="Law Office Name or Your Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="referringPhone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Phone</FormLabel>
                      <FormControl>
                        <Input placeholder="(555) 123-4567" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="referringEmail"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Email</FormLabel>
                      <FormControl>
                        <Input placeholder="you@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Injury Details</h3>
              
              <FormField
                control={form.control}
                name="specialty"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Required Specialty</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a specialty" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="orthopedic">Orthopedic Surgery</SelectItem>
                        <SelectItem value="neurology">Neurology</SelectItem>
                        <SelectItem value="physical-therapy">Physical Therapy</SelectItem>
                        <SelectItem value="chiropractic">Chiropractic</SelectItem>
                        <SelectItem value="pain-management">Pain Management</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="injuryType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Injury Description</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Please describe the injury and any relevant details..."
                        className="min-h-[100px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="additionalNotes"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Additional Notes (Optional)</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Any additional information..."
                        className="min-h-[80px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button type="submit" className="w-full" size="lg">
              Submit Referral
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default ReferralForm;
