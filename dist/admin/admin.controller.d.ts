import { AdminService } from './admin.service';
import { Response } from 'express';
import { CommonService } from 'src/common/common.service';
import { AdminDto } from './dtos/admin.dto';
import { SignInDto } from 'src/common/requests/signIn.dto';
import { AuthService } from 'src/auth/auth.service';
import { ChangePasswordReq } from 'src/common/requests/changePassword.req';
import { BookingService } from 'src/booking/booking.service';
export declare class AdminController {
    private adminService;
    private commonService;
    private authService;
    private bookingService;
    constructor(adminService: AdminService, commonService: CommonService, authService: AuthService, bookingService: BookingService);
    create(adminDto: AdminDto, res: Response): Promise<Response<any, Record<string, any>>>;
    signin(signinDto: SignInDto, res: Response): Promise<Response<any, Record<string, any>>>;
    getTempOwners(res: Response): Promise<Response<any, Record<string, any>>>;
    acceptOwner(id: string, res: Response): Promise<Response<any, Record<string, any>>>;
    rejectOwner(id: string, res: Response): Promise<Response<any, Record<string, any>>>;
    getTempDrivers(res: Response): Promise<Response<any, Record<string, any>>>;
    acceptDriver(id: string, res: Response): Promise<Response<any, Record<string, any>>>;
    rejectDriver(id: string, res: Response): Promise<Response<any, Record<string, any>>>;
    getTempVehicles(res: Response): Promise<Response<any, Record<string, any>>>;
    acceptVehicle(id: string, res: Response): Promise<Response<any, Record<string, any>>>;
    rejectVehicle(id: string, res: Response): Promise<Response<any, Record<string, any>>>;
    changeDriverPassword(passwordReq: ChangePasswordReq, id: string, res: Response): Promise<Response<any, Record<string, any>>>;
    getUpcomingBookings(res: Response): Promise<Response<any, Record<string, any>>>;
    getBookingsCount(res: Response): Promise<Response<any, Record<string, any>>>;
    getServiceCharges(res: Response): Promise<Response<any, Record<string, any>>>;
    getRewards(res: Response): Promise<Response<any, Record<string, any>>>;
    getFeedbacks(res: Response): Promise<Response<any, Record<string, any>>>;
    approveFeedback(feedbackId: string, res: Response): Promise<Response<any, Record<string, any>>>;
    deleteFeedback(feedbackId: string, res: Response): Promise<Response<any, Record<string, any>>>;
    getOwners(res: Response): Promise<Response<any, Record<string, any>>>;
    getDrivers(ownerId: string, res: Response): Promise<Response<any, Record<string, any>>>;
    getCustomers(res: Response): Promise<Response<any, Record<string, any>>>;
}
