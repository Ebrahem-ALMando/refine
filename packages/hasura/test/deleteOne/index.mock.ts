import nock from "nock";

nock("https://flowing-mammal-24.hasura.app:443", {
    encodedQueryParams: true,
})
    .post("/v1/graphql", {
        query: "mutation ($id: uuid!) {\n      delete_posts_by_pk (id: $id) {\n    id, title\n  }\n    }",
        variables: { id: "56c5a2cd-3b4d-4465-9d41-67f7991d833c" },
    })
    .reply(
        200,
        [
            "1f8b080000000000000314c8490ec3200c00c0af209fcb216549e133c860b741258b84738822fe5e758e7303a120c41b881b0ba763efd253bed2f1fd6f2588e07c71f82ca44db6a4adf54e07b293f6f37b0e61a29731051e20551a4384b26f9f9315375e7993735575530b16b560ae82bd338c317e000000ffff03006735476179000000",
        ],
        [
            "Date",
            "Fri, 04 Aug 2023 09:06:40 GMT",
            "Content-Type",
            "application/json; charset=utf-8",
            "Transfer-Encoding",
            "chunked",
            "Connection",
            "close",
            "x-request-id",
            "b0b15af8896af36b82e960766e5ef79f",
            "CF-Cache-Status",
            "DYNAMIC",
            "Content-Security-Policy",
            "upgrade-insecure-requests",
            "Referrer-Policy",
            "strict-origin-when-cross-origin",
            "Strict-Transport-Security",
            "max-age=31536000; includeSubDomains",
            "X-Content-Type-Options",
            "nosniff",
            "X-Frame-Options",
            "SAMEORIGIN",
            "X-XSS-Protection",
            "0",
            "Server",
            "cloudflare",
            "CF-RAY",
            "7f15a543cabe92db-IST",
            "Content-Encoding",
            "gzip",
        ],
    );

nock("https://flowing-mammal-24.hasura.app:443", {
    encodedQueryParams: true,
})
    .post("/v1/graphql", {
        query: "mutation ($id: uuid!) {\n      delete_posts_by_pk (id: $id) {\n    id\n  }\n    }",
        variables: { id: "312b993d-9648-4a15-aa92-11e7b77e0071" },
    })
    .reply(
        200,
        [
            "1f8b080000000000000314c8c10a80200c00d07fd97de0d4b2f93332d90e5190a09710ff3d7ac737416508e4096ab70d2bede9a397fa9676fd7b2a6408e42b7350e43d1e18853614618f44966a4ae65c22586b7d000000ffff0300a1517d4d4d000000",
        ],
        [
            "Date",
            "Fri, 04 Aug 2023 09:06:42 GMT",
            "Content-Type",
            "application/json; charset=utf-8",
            "Transfer-Encoding",
            "chunked",
            "Connection",
            "close",
            "x-request-id",
            "ce1f33b237188aecaa66efae407b814d",
            "CF-Cache-Status",
            "DYNAMIC",
            "Content-Security-Policy",
            "upgrade-insecure-requests",
            "Referrer-Policy",
            "strict-origin-when-cross-origin",
            "Strict-Transport-Security",
            "max-age=31536000; includeSubDomains",
            "X-Content-Type-Options",
            "nosniff",
            "X-Frame-Options",
            "SAMEORIGIN",
            "X-XSS-Protection",
            "0",
            "Server",
            "cloudflare",
            "CF-RAY",
            "7f15a54c880492cb-IST",
            "Content-Encoding",
            "gzip",
        ],
    );

nock("https://ruling-redbird-23.hasura.app:443", {
    encodedQueryParams: true,
})
    .post("/v1/graphql", {
        query: "mutation ($id: uuid!) {\n      deletePostsByPk (id: $id) {\n    id, title\n  }\n    }",
        variables: { id: "bc7025dc-f5d6-414a-b335-20b58a451af8" },
    })
    .reply(
        200,
        [
            "1f8b080000000000000314c84d0a84300c06d0ab0cdf7a0a551b47ba9c137885d4a450747ed0b810e9ddc5b77c27848d114f882e6a3afe36dbdec738df550411697af996647299a477a109ec52d7916b7da28103359c073c61c51645c4be7ef9f15fd5cafe41adf5020000ffff03008fd491cb61000000",
        ],
        [
            "Date",
            "Fri, 04 Aug 2023 09:06:43 GMT",
            "Content-Type",
            "application/json; charset=utf-8",
            "Transfer-Encoding",
            "chunked",
            "Connection",
            "close",
            "x-request-id",
            "5fb67bc09b055fa4bf40c3da04d56563",
            "CF-Cache-Status",
            "DYNAMIC",
            "Content-Security-Policy",
            "upgrade-insecure-requests",
            "Referrer-Policy",
            "strict-origin-when-cross-origin",
            "Strict-Transport-Security",
            "max-age=31536000; includeSubDomains",
            "X-Content-Type-Options",
            "nosniff",
            "X-Frame-Options",
            "SAMEORIGIN",
            "X-XSS-Protection",
            "0",
            "Server",
            "cloudflare",
            "CF-RAY",
            "7f15a555e86892cc-IST",
            "Content-Encoding",
            "gzip",
        ],
    );

nock("https://ruling-redbird-23.hasura.app:443", {
    encodedQueryParams: true,
})
    .post("/v1/graphql", {
        query: "mutation ($id: uuid!) {\n      deletePostsByPk (id: $id) {\n    id\n  }\n    }",
        variables: { id: "f39fbacb-c0e8-4fa0-97d9-833f15866ab7" },
    })
    .reply(
        200,
        [
            "1f8b0800000000000003aa564a492c4954b2aa564a49cd492d490dc82f2e2976aa0cc8060965a6285929a5195ba625252627e9261ba45ae89aa4251ae85a9aa758ea5a181ba7199a5a98992526992bd5d6d602000000ffff0300563f09524a000000",
        ],
        [
            "Date",
            "Fri, 04 Aug 2023 09:06:44 GMT",
            "Content-Type",
            "application/json; charset=utf-8",
            "Transfer-Encoding",
            "chunked",
            "Connection",
            "close",
            "x-request-id",
            "8c1383247f0220ef03f4e21bde7748d8",
            "CF-Cache-Status",
            "DYNAMIC",
            "Content-Security-Policy",
            "upgrade-insecure-requests",
            "Referrer-Policy",
            "strict-origin-when-cross-origin",
            "Strict-Transport-Security",
            "max-age=31536000; includeSubDomains",
            "X-Content-Type-Options",
            "nosniff",
            "X-Frame-Options",
            "SAMEORIGIN",
            "X-XSS-Protection",
            "0",
            "Server",
            "cloudflare",
            "CF-RAY",
            "7f15a5601ff65487-IST",
            "Content-Encoding",
            "gzip",
        ],
    );

nock("https://flowing-mammal-24.hasura.app:443", {
    encodedQueryParams: true,
})
    .post("/v1/graphql", {
        query: "mutation ($id: Int!) {\n      delete_users_by_pk (id: $id) {\n    id, name\n  }\n    }",
        variables: { id: 1 },
    })
    .reply(
        200,
        [
            "1f8b080035c1066402ffab564a492c4954b2aa564a49cd492d498d2f2d4e2d2a8e4faa8c2fc8068966a6285919ea28e525e6a62a592905a5a665e6a52ab8a49629d5d6d602005304de7c3c000000",
        ],
        [
            "Date",
            "Wed, 30 Nov 2022 11:58:17 GMT",
            "Content-Type",
            "application/json; charset=utf-8",
            "Transfer-Encoding",
            "chunked",
            "Connection",
            "close",
            "x-request-id",
            "9d3d79109c7d732bb1529b768af1fa06",
            "Content-Encoding",
            "gzip",
            "CF-Cache-Status",
            "DYNAMIC",
            "Content-Security-Policy",
            "upgrade-insecure-requests",
            "Referrer-Policy",
            "strict-origin-when-cross-origin",
            "Strict-Transport-Security",
            "max-age=31536000; includeSubDomains",
            "X-Content-Type-Options",
            "nosniff",
            "X-Frame-Options",
            "SAMEORIGIN",
            "X-XSS-Protection",
            "0",
            "Server",
            "cloudflare",
            "CF-RAY",
            "7723690bafb49170-FRA",
        ],
    );
nock("https://ruling-redbird-23.hasura.app:443", {
    encodedQueryParams: true,
})
    .post("/v1/graphql", {
        query: "mutation ($id: Int!) {\n      deleteUsersByPk (id: $id) {\n    id, name\n  }\n    }",
        variables: { id: 1 },
    })
    .reply(
        200,
        [
            "1f8b0800000000000013ab564a492c4954b2aa564a49cd492d490d2d4e2d2a76aa0cc8060965a6285919ea28e525e6a62a592905a5a665e6a52ab8a49629d5d6d60200796635e439000000",
        ],
        [
            "Date",
            "Wed, 30 Nov 2022 11:58:17 GMT",
            "Content-Type",
            "application/json; charset=utf-8",
            "Transfer-Encoding",
            "chunked",
            "Connection",
            "close",
            "x-request-id",
            "9d3d79109c7d732bb1529b768af1fa06",
            "Content-Encoding",
            "gzip",
            "CF-Cache-Status",
            "DYNAMIC",
            "Content-Security-Policy",
            "upgrade-insecure-requests",
            "Referrer-Policy",
            "strict-origin-when-cross-origin",
            "Strict-Transport-Security",
            "max-age=31536000; includeSubDomains",
            "X-Content-Type-Options",
            "nosniff",
            "X-Frame-Options",
            "SAMEORIGIN",
            "X-XSS-Protection",
            "0",
            "Server",
            "cloudflare",
            "CF-RAY",
            "7723690bafb49170-FRA",
        ],
    );

// with gqlMutation correct response with hasura-default
nock("https://flowing-mammal-24.hasura.app:443", {
    encodedQueryParams: true,
})
    .post("/v1/graphql", {
        query: "mutation DeletePost($id: uuid!) {\n  delete_posts_by_pk(id: $id) {\n    id\n    title\n  }\n}\n",
        variables: { id: "56c5a2cd-3b4d-4465-9d41-67f7991d833c" },
        operationName: "DeletePost",
    })
    .reply(
        200,
        [
            "1f8b080000000000000314c8490ec3200c00c0af209fcb216549e133c860b741258b84738822fe5e758e7303a120c41b881b0ba763efd253bed2f1fd6f2588e07c71f82ca44db6a4adf54e07b293f6f37b0e61a29731051e20551a4384b26f9f9315375e7993735575530b16b560ae82bd338c317e000000ffff03006735476179000000",
        ],
        [
            "Date",
            "Fri, 04 Aug 2023 09:06:40 GMT",
            "Content-Type",
            "application/json; charset=utf-8",
            "Transfer-Encoding",
            "chunked",
            "Connection",
            "close",
            "x-request-id",
            "b0b15af8896af36b82e960766e5ef79f",
            "CF-Cache-Status",
            "DYNAMIC",
            "Content-Security-Policy",
            "upgrade-insecure-requests",
            "Referrer-Policy",
            "strict-origin-when-cross-origin",
            "Strict-Transport-Security",
            "max-age=31536000; includeSubDomains",
            "X-Content-Type-Options",
            "nosniff",
            "X-Frame-Options",
            "SAMEORIGIN",
            "X-XSS-Protection",
            "0",
            "Server",
            "cloudflare",
            "CF-RAY",
            "7f15a543cabe92db-IST",
            "Content-Encoding",
            "gzip",
        ],
    );

// with gqlMutation correct response with graphql-default
nock("https://ruling-redbird-23.hasura.app:443", {
    encodedQueryParams: true,
})
    .post("/v1/graphql", {
        query: "mutation DeletePost($id: uuid!) {\n  deletePostByPk(id: $id) {\n    id\n    title\n  }\n}\n",
        variables: { id: "f39fbacb-c0e8-4fa0-97d9-833f15866ab7" },
        operationName: "DeletePost",
    })
    .reply(
        200,
        [
            "1f8b0800000000000003aa564a492c4954b2aa564a49cd492d490dc82f2e2976aa0cc8060965a6285929a5195ba625252627e9261ba45ae89aa4251ae85a9aa758ea5a181ba7199a5a98992526992bd5d6d602000000ffff0300563f09524a000000",
        ],
        [
            "Date",
            "Fri, 04 Aug 2023 09:06:44 GMT",
            "Content-Type",
            "application/json; charset=utf-8",
            "Transfer-Encoding",
            "chunked",
            "Connection",
            "close",
            "x-request-id",
            "8c1383247f0220ef03f4e21bde7748d8",
            "CF-Cache-Status",
            "DYNAMIC",
            "Content-Security-Policy",
            "upgrade-insecure-requests",
            "Referrer-Policy",
            "strict-origin-when-cross-origin",
            "Strict-Transport-Security",
            "max-age=31536000; includeSubDomains",
            "X-Content-Type-Options",
            "nosniff",
            "X-Frame-Options",
            "SAMEORIGIN",
            "X-XSS-Protection",
            "0",
            "Server",
            "cloudflare",
            "CF-RAY",
            "7f15a5601ff65487-IST",
            "Content-Encoding",
            "gzip",
        ],
    );

// with gqlMutation correct response  without gql with hasura-default
nock("https://flowing-mammal-24.hasura.app:443", {
    encodedQueryParams: true,
})
    .post("/v1/graphql", {
        query: "mutation ($id: uuid!) {\n      delete_posts_by_pk (id: $id) {\n    id\n  }\n    }",
        variables: { id: "312b993d-9648-4a15-aa92-11e7b77e0071" },
    })
    .reply(
        200,
        [
            "1f8b080000000000000314c8c10a80200c00d07fd97de0d4b2f93332d90e5190a09710ff3d7ac737416508e4096ab70d2bede9a397fa9676fd7b2a6408e42b7350e43d1e18853614618f44966a4ae65c22586b7d000000ffff0300a1517d4d4d000000",
        ],
        [
            "Date",
            "Fri, 04 Aug 2023 09:06:40 GMT",
            "Content-Type",
            "application/json; charset=utf-8",
            "Transfer-Encoding",
            "chunked",
            "Connection",
            "close",
            "x-request-id",
            "b0b15af8896af36b82e960766e5ef79f",
            "CF-Cache-Status",
            "DYNAMIC",
            "Content-Security-Policy",
            "upgrade-insecure-requests",
            "Referrer-Policy",
            "strict-origin-when-cross-origin",
            "Strict-Transport-Security",
            "max-age=31536000; includeSubDomains",
            "X-Content-Type-Options",
            "nosniff",
            "X-Frame-Options",
            "SAMEORIGIN",
            "X-XSS-Protection",
            "0",
            "Server",
            "cloudflare",
            "CF-RAY",
            "7f15a543cabe92db-IST",
            "Content-Encoding",
            "gzip",
        ],
    );

// with gqlMutation correct response  without gql with graphql-default
nock("https://ruling-redbird-23.hasura.app:443", {
    encodedQueryParams: true,
})
    .post("/v1/graphql", {
        query: "mutation ($id: uuid!) {\n      deletePostsByPk (id: $id) {\n    id\n  }\n    }",
        variables: { id: "f39fbacb-c0e8-4fa0-97d9-833f15866ab7" },
    })
    .reply(
        200,
        [
            "1f8b0800000000000003aa564a492c4954b2aa564a49cd492d490dc82f2e2976aa0cc8060965a6285929a5195ba625252627e9261ba45ae89aa4251ae85a9aa758ea5a181ba7199a5a98992526992bd5d6d602000000ffff0300563f09524a000000",
        ],
        [
            "Date",
            "Fri, 04 Aug 2023 09:06:44 GMT",
            "Content-Type",
            "application/json; charset=utf-8",
            "Transfer-Encoding",
            "chunked",
            "Connection",
            "close",
            "x-request-id",
            "8c1383247f0220ef03f4e21bde7748d8",
            "CF-Cache-Status",
            "DYNAMIC",
            "Content-Security-Policy",
            "upgrade-insecure-requests",
            "Referrer-Policy",
            "strict-origin-when-cross-origin",
            "Strict-Transport-Security",
            "max-age=31536000; includeSubDomains",
            "X-Content-Type-Options",
            "nosniff",
            "X-Frame-Options",
            "SAMEORIGIN",
            "X-XSS-Protection",
            "0",
            "Server",
            "cloudflare",
            "CF-RAY",
            "7f15a5601ff65487-IST",
            "Content-Encoding",
            "gzip",
        ],
    );
