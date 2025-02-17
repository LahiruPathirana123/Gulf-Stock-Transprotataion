import { OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit } from "@nestjs/websockets";
import { Server, Socket } from "socket.io";
import { NotificationReq } from "src/common/requests/notification.req";
import { Customer } from "src/customer/entities/customer.entity";
import { CustomerNotification } from "src/customer/entities/customerNotification.entity";
import { Driver } from "src/driver/entities/driver.entity";
import { DriverNotification } from "src/driver/entities/driverNotification.entity";
import { Owner } from "src/owner/entities/owner.entity";
import { OwnerNotification } from "src/owner/entities/ownerNotification.entity";
import { Repository } from "typeorm";
export declare class NotificationGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
    private customerNotifyRepo;
    private ownerNotifyRepo;
    private driverNotifyRepo;
    private customerRepo;
    private ownerRepo;
    private driverRepo;
    constructor(customerNotifyRepo: Repository<CustomerNotification>, ownerNotifyRepo: Repository<OwnerNotification>, driverNotifyRepo: Repository<DriverNotification>, customerRepo: Repository<Customer>, ownerRepo: Repository<Owner>, driverRepo: Repository<Driver>);
    private clients;
    server: Server;
    afterInit(server: Server): void;
    handleConnection(client: Socket): void;
    handleDisconnect(client: any): void;
    joinCustomerNotifyRoom(client: Socket, customerId: string): void;
    leaveCustomerNotifyRoom(client: Socket, customerId: string): void;
    joinOwnerNotifyRoom(client: Socket, ownerId: string): void;
    leaveOwnerNotifyRoom(client: Socket, ownerId: string): void;
    joinDriverNotifyRoom(client: Socket, driverId: string): void;
    leaveDriverNotifyRoom(client: Socket, driverId: string): void;
    sendCustomerNotification(request: NotificationReq): Promise<void>;
    sendOwnerNotification(request: NotificationReq): Promise<void>;
    sendDriverNotification(request: NotificationReq): Promise<void>;
}
