import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table,TableHeader,TableRow,TableHead,TableCell, TableBody } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import AdminOrderDetailsView from "./order-details";
import { Dialog } from "../ui/dialog";


export function AdminOrdersView() {
  const [openDetailsDialog,setOpenDetailsDialog]=useState(false)
  return (
    <Card>
      <CardHeader>
        <CardTitle>All Orders</CardTitle>
      </CardHeader>
      <CardContent>
                         <Table>
                             <TableHeader>
                                 <TableRow>
                                     <TableHead>Order ID</TableHead>
                                     <TableHead>Order Date</TableHead>
                                     <TableHead>Order Status</TableHead>
                                     <TableHead>Order Price</TableHead>
                                     <TableHead>
                                         <span className="sr-only">Details</span>
                                     </TableHead>
                                 </TableRow>
                             </TableHeader>
     
                             <TableBody>
                                 <TableRow>
                                     <TableCell>123456</TableCell>
                                     <TableCell>27/05/65</TableCell>
                                     <TableCell>In Process</TableCell>
                                     <TableCell>$1232</TableCell>
                                     <TableCell>
                                      {/* Dialog for the Order Details*/}
                                      <Dialog open={openDetailsDialog} onOpenChange={setOpenDetailsDialog}>
                                         <Button onClick={()=>setOpenDetailsDialog(true)}>View Details</Button>
                                         <AdminOrderDetailsView />
                                      </Dialog>
                                     </TableCell>
                                 </TableRow>
                             </TableBody>
                         </Table>
                       </CardContent>
    </Card>
  );
}

export default AdminOrdersView;
