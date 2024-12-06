import { Booking } from './enities/booking.entity';
import { Repository } from 'typeorm';
import { BookingDto } from './dtos/booking.dto';
import { DriverVehicle } from 'src/driver/entities/driver.vehicle.entity';
import { Customer } from 'src/customer/entities/customer.entity';
import { Vehicle } from 'src/vehicle/entities/vehicle.entity';
import { ChargesRes } from 'src/customer/responses/charges.res';
import { IntentReq } from 'src/customer/requests/intent.req';
import { IntentRes } from 'src/customer/responses/intent.res';
import { BookingCancelDto } from './dtos/bookingCancel.dto';
import { PaymentDto } from './dtos/payment.dto';
import { AdvancePayment } from './enities/advancePayment.entity';
import { CommonRes } from 'src/common/responses/common.res';
import { OwnerCredit } from 'src/owner/entities/ownerCredit.entity';
import { OwnerWallet } from 'src/owner/entities/ownerWallet.entity';
import { BookingCancel } from './enities/bookingCancel.entity';
import { CalChargeReq } from 'src/customer/requests/calCharge.req';
import { SharedBookingReq } from 'src/customer/requests/sharedBooking.req';
import { SharedBooking } from './enities/sharedBooking.entity';
import { SharedBookingCancel } from './enities/sharedBookingCancel.entity';
import { BookingCompleteRes } from '../driver/responses/bookingComplete.res';
import { CoordinatesRes } from 'src/driver/responses/coordinates.res';
import { BalPaymentReq } from 'src/customer/requests/balPayment.req';
import { BalPayment } from './enities/balPayment.entity';
import { ServiceCharge } from './enities/serviceCharge.entity';
import { Owner } from 'src/owner/entities/owner.entity';
import { RateReviewReq } from 'src/customer/requests/rateReview.req';
import { RateReview } from './enities/rateReview.entity';
import { Driver } from 'src/driver/entities/driver.entity';
import { OwnerRewards } from 'src/owner/entities/ownerRewards.entity';
import { CustomerRewards } from 'src/customer/entities/customerRewards.entity';
import { BookingCountRes } from 'src/admin/responses/bookingCount.res';
import { CancelledReasonRes } from 'src/common/responses/cancelledReason.res';
import { SharedBookingRes } from 'src/common/responses/sharedBooking.res';
import { PaymentHistoryRes } from 'src/customer/responses/paymentHistory.res';
import { DriversBookingCountRes } from 'src/owner/responses/driversBookingCount.res';
import { NotificationGateway } from 'src/gateways/notification.gateway';
import { AllBookingsRes } from 'src/customer/responses/allBookings.res';
import { BookingRes } from 'src/common/responses/booking.res';
export declare class BookingService {
    private repo;
    private driverVehiRepo;
    private customerRepo;
    private vehicleRepo;
    private paymentRepo;
    private ownerCreditRepo;
    private ownerWalletRepo;
    private bookingCancelRepo;
    private sharedBookingRepo;
    private sharedBookingCancelRepo;
    private balPaymentRepo;
    private serviceChargeRepo;
    private driverRepo;
    private rateReviewRepo;
    private ownerRewardsRepo;
    private customerRewardsRepo;
    private readonly notifications;
    constructor(repo: Repository<Booking>, driverVehiRepo: Repository<DriverVehicle>, customerRepo: Repository<Customer>, vehicleRepo: Repository<Vehicle>, paymentRepo: Repository<AdvancePayment>, ownerCreditRepo: Repository<OwnerCredit>, ownerWalletRepo: Repository<OwnerWallet>, bookingCancelRepo: Repository<BookingCancel>, sharedBookingRepo: Repository<SharedBooking>, sharedBookingCancelRepo: Repository<SharedBookingCancel>, balPaymentRepo: Repository<BalPayment>, serviceChargeRepo: Repository<ServiceCharge>, driverRepo: Repository<Driver>, rateReviewRepo: Repository<RateReview>, ownerRewardsRepo: Repository<OwnerRewards>, customerRewardsRepo: Repository<CustomerRewards>, notifications: NotificationGateway);
    calCharges(calChargeReq: CalChargeReq): Promise<ChargesRes>;
    create(bookingDto: BookingDto): Promise<Booking>;
    getBookingsCustomer(id: string): Promise<Booking[]>;
    createPaymentIntent(intentReq: IntentReq): Promise<IntentRes>;
    recordPayment(bookingId: string, type: string, paymentDto: PaymentDto): Promise<CommonRes>;
    cancelBooking(bookingCancelDto: BookingCancelDto, id: string): Promise<CommonRes>;
    getBookingsByOwner(ownerId: string): Promise<Booking[]>;
    getSharedBoookings(): Promise<any>;
    makeSharedBooking(sBooking: SharedBookingReq): Promise<SharedBooking>;
    cancelSharedBooking(bookingCancelDto: BookingCancelDto, id: string): Promise<CommonRes>;
    getSharedBookingsByCustomer(id: string): Promise<SharedBooking[]>;
    getBookingsCoordinates(bookingId: string, bookingType: string): Promise<CoordinatesRes>;
    updateBookingLoadingTime(id: string, time: number): Promise<Booking>;
    updateBookingUnloadingTime(bookingId: string, time: number): Promise<BookingCompleteRes>;
    updateSharedBookingLoadingTime(id: string, time: number): Promise<SharedBooking>;
    updateSharedBookingUnloadingTime(id: string, time: number): Promise<BookingCompleteRes>;
    getOriginalCancelledShared(customerId: string): Promise<any[]>;
    recordBalPayment(paymentReq: BalPaymentReq, bookingId: string): Promise<{
        bookingId: string;
        booking: SharedBooking | Booking;
    }>;
    makeRateReview(rateReviewReq: RateReviewReq, customerId: string): Promise<RateReview>;
    getOwner(bookingId: string, type: string): Promise<Owner>;
    getUpcomingDriver(bookingId: string, type: string): Promise<Driver>;
    getCompletedDriver(bookingId: string, type: string): Promise<Driver>;
    getCustomer(bookingId: string, type: string): Promise<Customer>;
    getRateReview(bookingId: string, type: string): Promise<RateReview>;
    getVehicle(bookingId: string, type: string): Promise<Vehicle>;
    getBookingsCount(): Promise<BookingCountRes>;
    getCancelledReason(bookingId: string, type: string): Promise<CancelledReasonRes>;
    getServiceCharges(): Promise<any[]>;
    getRewards(): Promise<any>;
    getBookingData(bookingId: string, type: string): Promise<BookingRes | SharedBookingRes>;
    getPaymentHistory(customerId: string): Promise<PaymentHistoryRes[]>;
    getDriversBookingCount(ownerId: string): Promise<DriversBookingCountRes[]>;
    getReturnTrips(): Promise<Booking[]>;
    getOwnerRates(ownerId: string): Promise<number>;
    getBalancePaymentPendings(customerId: string): Promise<AllBookingsRes>;
    private recordServiceCharge;
    private recordOwnerTransaction;
    private updateWallet;
    private getNearbyCities;
    private getCitiesFromCoord;
}
