import { errorExtractor } from "error-extractor";
import { Notyf } from "notyf";

class Notify {
	private notyf = new Notyf({
        position: {x: "center", y: "top"},
        dismissible: true});

    public success(message: string) {
        this.notyf.options.duration = 4000;
        this.notyf.success(message);
    }

    public error(err: any) {
        this.notyf.options.duration = 9000;
        const message = errorExtractor.getMessage(err);
        this.notyf.error(message);
    }
}

export const notify = new Notify();
