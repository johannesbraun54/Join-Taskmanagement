const STORAGE_TOKEN = 'DKM2X2M3RY87UVCQ29JZ0ODF7AJXN9ZJ3FIY39V7';
const STORAGE_URL = 'https://remote-storage.developerakademie.org/item';


async function setItem(key, value) {
    const payload = { key, value, token: STORAGE_TOKEN };
    return fetch(STORAGE_URL, { method: 'POST', body: JSON.stringify(payload)})
    .then(res => res.json());
}

async function getItem(key) {
    const url = `${STORAGE_URL}?key=${key}&token=${STORAGE_TOKEN}`;
    return fetch(url).then(res => res.json());
}

//SP7TTNBQDPCOL3IQKV8FAT621MDD2EZJ4VPB4SFF