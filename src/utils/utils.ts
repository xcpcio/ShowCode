import request from './request';

export function fetchCode(url: string) {
    return new Promise((resolve, reject) => {
        request.get(url).then((response: Response) => {
            resolve(response);
        });
    });
}
