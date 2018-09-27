///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Subscription }   from 'rxjs/Subscription';
import { Notification } from '../notification/notification';

@Injectable()
export class NotificationService {
    private notificationsSource: Subject<Notification> = new Subject<Notification>();
    private notifications: Observable<Notification> = this.notificationsSource.asObservable();

    /**
     * Triggers the notification
     */
    public notify(notification: Notification): void {
        this.notificationsSource.next(notification);
    }

    /**
     * Subscribes to notification events
     */
    public subscribe(callback: (notification: Notification) => void): Subscription {
        return this.notifications.subscribe(callback);
    }
}