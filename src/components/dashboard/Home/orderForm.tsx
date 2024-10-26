import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"

export function OrdersForm() {
  const [formData, setFormData] = useState({
    shipperName: "",
    shipperAddress: "",
    shipperEmail: "",
    shipperPhone: "",
    shipperNTN: "",
    consigneeName: "",
    consigneeAddress: "",
    consigneePhone: "",
    consigneeEmail: "",
    parcelWeight: "",
    parcelDetails: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevData => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
    // Here you would typically send the data to your backend
  }

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-lg">
      <CardHeader>
        <CardTitle>Shipping Information</CardTitle>
        <CardDescription>Please fill out the shipping details for your parcel.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Shipper Information</h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="shipperName">Name</Label>
                <Input id="shipperName" name="shipperName" placeholder="John Doe" value={formData.shipperName} onChange={handleChange} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="shipperEmail">Email</Label>
                <Input id="shipperEmail" name="shipperEmail" type="email" placeholder="john@example.com" value={formData.shipperEmail} onChange={handleChange} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="shipperPhone">Phone</Label>
                <Input id="shipperPhone" name="shipperPhone" placeholder="+1 234 567 8900" value={formData.shipperPhone} onChange={handleChange} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="shipperNTN">NTN</Label>
                <Input id="shipperNTN" name="shipperNTN" placeholder="National Tax Number" value={formData.shipperNTN} onChange={handleChange} />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="shipperAddress">Address</Label>
              <Textarea id="shipperAddress" name="shipperAddress" placeholder="Enter full address" value={formData.shipperAddress} onChange={handleChange} required />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Consignee Information</h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="consigneeName">Name</Label>
                <Input id="consigneeName" name="consigneeName" placeholder="Jane Smith" value={formData.consigneeName} onChange={handleChange} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="consigneeEmail">Email</Label>
                <Input id="consigneeEmail" name="consigneeEmail" type="email" placeholder="jane@example.com" value={formData.consigneeEmail} onChange={handleChange} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="consigneePhone">Phone</Label>
                <Input id="consigneePhone" name="consigneePhone" placeholder="+1 234 567 8900" value={formData.consigneePhone} onChange={handleChange} required />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="consigneeAddress">Address</Label>
              <Textarea id="consigneeAddress" name="consigneeAddress" placeholder="Enter full address" value={formData.consigneeAddress} onChange={handleChange} required />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Parcel Information</h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="parcelWeight">Weight (kg)</Label>
                <Input id="parcelWeight" name="parcelWeight" type="number" placeholder="0.00" value={formData.parcelWeight} onChange={handleChange} required />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="parcelDetails">Details</Label>
              <Textarea id="parcelDetails" name="parcelDetails" placeholder="Provide any additional details about the parcel" value={formData.parcelDetails} onChange={handleChange} />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button type="submit" className="w-full">Submit Shipping Information</Button>
      </CardFooter>
    </Card>
  )
}