///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'kbToIcon'})
export class KbToNotificationIconPipe implements PipeTransform {
    public transform(value: string): string {
        const BASE_CLASS: string = 'k-icon';
        const PREFIX: string = 'k-i-'
        let iconName: string;

        switch (value) {
            case 'success':
                iconName = 'check-outline';
                break;
            case 'info':
                iconName = 'information';
                break;
            case 'error':
                iconName = 'warning';
                break;
            default:
                iconName = 'information';
        }
        return BASE_CLASS + ' ' + PREFIX + iconName;
    }
}