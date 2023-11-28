import { hardcodedPrintingLogs } from '../Models/log_model';

const filterPrintingLogs = (sid, pid, startDate, endDate) => {
    return hardcodedPrintingLogs.filter(log => {
        // Check sid if defined and not equal
        if (sid !== '' && log.sid !== sid) {
            // console.log("haha1")
            return false;
        }

        // Check pid if defined and not equal
        if (pid !== '' && log.pid !== pid) {
            return false;
        }

        // Check start_date if defined and not equal
        if (startDate !== null && log.date < startDate) {
            return false;
        }

        // Check end_date if defined and not equal
        if (endDate !== null && log.date > endDate) {
            return false;
        }
        // If all conditions pass, include the log in the result
        return true;
    });
};

export { filterPrintingLogs };