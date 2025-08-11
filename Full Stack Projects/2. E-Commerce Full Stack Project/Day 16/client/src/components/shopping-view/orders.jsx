import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table,TableHeader,TableRow,TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Button } from "../ui/button";
import ShoppingOrderDetailsView from "@/pages/shopping-view/order-details";
import { Dialog } from "../ui/dialog";
import { useState } from "react";


function ShoppingOrders(){
      const [openDetailsDialog,setOpenDetailsDialog]=useState(false)
    
    return(
        <Card>
            <CardHeader>
                <CardTitle>Order History</CardTitle>
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
                                         <ShoppingOrderDetailsView />
                                         </Dialog>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                  </CardContent>
        </Card>
    )
}

export default ShoppingOrders