# FaviconShodanDork
Firefox addon that generates the Shodan dork for a favicon, allowing users to quickly obtain the hash of a favicon and search for matching infrastructure on Shodan. Inspired by the [magicfav tool](https://github.com/alanbriangh/magicfav).

## Installation
- Download the latest packaged addon in [releases](https://github.com/m074/FaviconShodanDork/releases).
- Open Firefox and go the Add-ons Manager.
- Select "Install Add-on From File...".
- Select the .xpi file you downloaded.

## Usage
- Go to the favicon.ico page.
- Right-click on the icon.
- Select "Copy the Shodan dork for the favicon to the clipboard".

![image](https://github.com/user-attachments/assets/0607e96c-6c5d-48fe-8e9b-cf1fd2729d5b)

- Go to Shodan.
- Paste the dork from the clipboard.

![image](https://github.com/user-attachments/assets/6b9281f1-e810-4129-8b7a-b3bf9006fc97)

## External libraries
This project uses the library from [pid/murmurHash3js](https://github.com/pid/murmurHash3js) for MurmurHash3 computation
