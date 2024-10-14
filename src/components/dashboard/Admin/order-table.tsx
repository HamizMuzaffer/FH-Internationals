import { useState } from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowUpDown, Package, Truck, ShoppingCart, Edit } from "lucide-react"

interface Order {
  id: string
  name: string
  date: string
  status: "Pending" | "Shipped" | "Delivered"
  service: "Standard" | "Express" | "Next Day"
}

const initialOrders: Order[] = [
  { id: "ORD-001", name: "Wireless Headphones", date: "2023-06-01", status: "Pending", service: "Standard" },
  { id: "ORD-002", name: "Smart Watch", date: "2023-06-02", status: "Shipped", service: "Express" },
  { id: "ORD-003", name: "Laptop", date: "2023-06-03", status: "Delivered", service: "Next Day" },
  { id: "ORD-004", name: "Smartphone", date: "2023-06-04", status: "Pending", service: "Standard" },
  { id: "ORD-005", name: "Tablet", date: "2023-06-05", status: "Shipped", service: "Express" },
]

export function OrderTable() {
  const [orders, setOrders] = useState<Order[]>(initialOrders)
  const [sortColumn, setSortColumn] = useState<keyof Order>("date")
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc")
  const [editingOrder, setEditingOrder] = useState<Order | null>(null)

  const sortedOrders = [...orders].sort((a, b) => {
    if (a[sortColumn] < b[sortColumn]) return sortDirection === "asc" ? -1 : 1
    if (a[sortColumn] > b[sortColumn]) return sortDirection === "asc" ? 1 : -1
    return 0
  })

  const toggleSort = (column: keyof Order) => {
    if (column === sortColumn) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortColumn(column)
      setSortDirection("asc")
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-500"
      case "Shipped":
        return "bg-blue-500"
      case "Delivered":
        return "bg-green-500"
      default:
        return "bg-gray-500"
    }
  }

  const getServiceIcon = (service: string) => {
    switch (service) {
      case "Standard":
        return <Truck className="h-4 w-4" />
      case "Express":
        return <ShoppingCart className="h-4 w-4" />
      case "Next Day":
        return <Package className="h-4 w-4" />
      default:
        return <Truck className="h-4 w-4" />
    }
  }

  const handleEdit = (order: Order) => {
    setEditingOrder({ ...order })
  }

  const handleSave = () => {
    if (editingOrder) {
      setOrders(orders.map(order => order.id === editingOrder.id ? editingOrder : order))
      setEditingOrder(null)
    }
  }

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">
              <Button variant="ghost" onClick={() => toggleSort("id")}>
                ID
                <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            </TableHead>
            <TableHead>
              <Button variant="ghost" onClick={() => toggleSort("name")}>
                Order Name
                <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            </TableHead>
            <TableHead>
              <Button variant="ghost" onClick={() => toggleSort("date")}>
                Date
                <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            </TableHead>
            <TableHead>
              <Button variant="ghost" onClick={() => toggleSort("status")}>
                Status
                <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            </TableHead>
            <TableHead>
              <Button variant="ghost" onClick={() => toggleSort("service")}>
                Service
                <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            </TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedOrders.map((order) => (
            <TableRow key={order.id}>
              <TableCell className="font-medium">{order.id}</TableCell>
              <TableCell>{order.name}</TableCell>
              <TableCell>{order.date}</TableCell>
              <TableCell>
                <Badge variant="outline" className={`${getStatusColor(order.status)} text-white`}>
                  {order.status}
                </Badge>
              </TableCell>
              <TableCell>
                <div className="flex items-center">
                  {getServiceIcon(order.service)}
                  <span className="ml-2">{order.service}</span>
                </div>
              </TableCell>
              <TableCell>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="ghost" size="sm" onClick={() => handleEdit(order)}>
                      <Edit className="h-4 w-4 mr-2" />
                      Edit
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Edit Order {order.id}</DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                          Name
                        </Label>
                        <Input
                          id="name"
                          value={editingOrder?.name || ""}
                          onChange={(e) => setEditingOrder(prev => prev ? { ...prev, name: e.target.value } : null)}
                          className="col-span-3"
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="date" className="text-right">
                          Date
                        </Label>
                        <Input
                          id="date"
                          type="date"
                          value={editingOrder?.date || ""}
                          onChange={(e) => setEditingOrder(prev => prev ? { ...prev, date: e.target.value } : null)}
                          className="col-span-3"
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="status" className="text-right">
                          Status
                        </Label>
                        <Select
                          value={editingOrder?.status || ""}
                          onValueChange={(value) => setEditingOrder(prev => prev ? { ...prev, status: value as Order['status'] } : null)}
                        >
                          <SelectTrigger className="col-span-3">
                            <SelectValue placeholder="Select status" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Pending">Pending</SelectItem>
                            <SelectItem value="Shipped">Shipped</SelectItem>
                            <SelectItem value="Delivered">Delivered</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="service" className="text-right">
                          Service
                        </Label>
                        <Select
                          value={editingOrder?.service || ""}
                          onValueChange={(value) => setEditingOrder(prev => prev ? { ...prev, service: value as Order['service'] } : null)}
                        >
                          <SelectTrigger className="col-span-3">
                            <SelectValue placeholder="Select service" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Standard">Standard</SelectItem>
                            <SelectItem value="Express">Express</SelectItem>
                            <SelectItem value="Next Day">Next Day</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <Button onClick={handleSave}>Save changes</Button>
                  </DialogContent>
                </Dialog>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}