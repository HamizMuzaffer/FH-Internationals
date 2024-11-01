import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Package, User, Calendar, FileText, MapPin } from "lucide-react"

export function OrderDetailCard({ 
  productName = "Ergonomic Desk Chair",
  consigneeName = "John Doe",
  date = "2023-11-02",
  orderNo = "ORD-12345",
  address = "123 Main St, Anytown, AN 12345"
}: {
  productName?: string
  consigneeName?: string
  date?: string
  orderNo?: string
  address?: string
}) {
  return (
    <Card className="w-full max-w-md mx-auto transition-all duration-300 ease-in-out sm:aspect-square md:aspect-[4/3]">
      <CardHeader>
        <CardTitle className="text-lg sm:text-xl md:text-2xl flex items-center gap-2">
          <Package className="h-6 w-6" />
          {productName}
        </CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid grid-cols-[24px_1fr] items-center gap-2">
          <User className="h-5 w-5 text-muted-foreground" />
          <div className="text-sm">{consigneeName}</div>
        </div>
        <div className="grid grid-cols-[24px_1fr] items-center gap-2">
          <Calendar className="h-5 w-5 text-muted-foreground" />
          <div className="text-sm">{new Date(date).toLocaleDateString()}</div>
        </div>
        <div className="grid grid-cols-[24px_1fr] items-center gap-2">
          <FileText className="h-5 w-5 text-muted-foreground" />
          <div className="text-sm">{orderNo}</div>
        </div>
        <div className="grid grid-cols-[24px_1fr] items-start gap-2">
          <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
          <div className="text-sm">{address}</div>
        </div>
      </CardContent>
    </Card>
  )
}