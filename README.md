# nite-pagination

# Install

```
npm i @nite1984/nite-pagination
```

```
import NitePagination from '@nite1984/nite-pagination';

window.NitePagination = NitePagination;
```

# Usage

```
const pagination = new NitePagination({
    containerSelector: '#pagination',
    pageSelectCallback: (page) => {
        console.log(page);
    },
    maxPages: 10,
});
```

```
const pagination = new NitePagination({
    containerSelector: '#pagination',
    pageSelectCallback: (page) => {
        console.log(page);
    },
});

pagination.setMaxPages(10);
```