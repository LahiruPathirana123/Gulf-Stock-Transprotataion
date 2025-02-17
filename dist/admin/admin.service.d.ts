import { CommonService } from 'src/common/common.service';
import { Driver } from 'src/driver/entities/driver.entity';
import { TempDriver } from 'src/driver/entities/tempDriver.entity';
import { Owner } from 'src/owner/entities/owner.entity';
import { TempOwner } from 'src/owner/entities/tempOwner.entity';
import { TempVehicle } from 'src/vehicle/entities/tempVehicle.entity';
import { Vehicle } from 'src/vehicle/entities/vehicle.entity';
import { Repository } from 'typeorm';
import { AdminDto } from './dtos/admin.dto';
import { Admin } from './entites/admin.entity';
import { ChangePasswordReq } from 'src/common/requests/changePassword.req';
import { Booking } from 'src/booking/enities/booking.entity';
import { SharedBooking } from 'src/booking/enities/sharedBooking.entity';
import { CustomerFeedback } from 'src/common/entities/customerFeedback.entity';
import { OwnersRes } from './responses/owners.res';
import { DriversRes } from './responses/drivers.res';
import { CustomersRes } from './responses/customers.res';
import { Customer } from 'src/customer/entities/customer.entity';
export declare class AdminService {
    private tempOwnerRepo;
    private ownerRepo;
    private tempDriverRepo;
    private driverRepo;
    private tempVehicleRepo;
    private vehicleRepo;
    private adminRepo;
    private bookingRepo;
    private sharedBookingRepo;
    private feedbackRepo;
    private customerRepo;
    private commonService;
    constructor(tempOwnerRepo: Repository<TempOwner>, ownerRepo: Repository<Owner>, tempDriverRepo: Repository<TempDriver>, driverRepo: Repository<Driver>, tempVehicleRepo: Repository<TempVehicle>, vehicleRepo: Repository<Vehicle>, adminRepo: Repository<Admin>, bookingRepo: Repository<Booking>, sharedBookingRepo: Repository<SharedBooking>, feedbackRepo: Repository<CustomerFeedback>, customerRepo: Repository<Customer>, commonService: CommonService);
    create(adminDto: AdminDto): Promise<Admin>;
    signin(email: string): Promise<Admin>;
    getTempOwners(): Promise<TempOwner[]>;
    acceptOwner(ownerId: string): Promise<Owner>;
    rejectOwner(ownerId: string): Promise<TempOwner>;
    getTempDrivers(): Promise<TempDriver[]>;
    acceptDriver(driverId: string): Promise<TempDriver>;
    rejectDriver(driverId: string): Promise<TempDriver>;
    getTempVehicles(): Promise<TempVehicle[]>;
    acceptVehicle(vehicleId: string): Promise<TempVehicle>;
    rejectVehicle(vehicleId: string): Promise<TempVehicle>;
    changePassword(id: string, passwordReq: ChangePasswordReq): Promise<Admin>;
    getBookings(): Promise<Booking[]>;
    getFeedbacks(): Promise<CustomerFeedback[]>;
    approveFeedback(feedbackId: string): Promise<CustomerFeedback>;
    deleteFeedback(feedbackId: string): Promise<CustomerFeedback>;
    getOwners(): Promise<OwnersRes[]>;
    getDrivers(ownerId: string): Promise<DriversRes[]>;
    getCustomers(): Promise<CustomersRes[]>;
}
