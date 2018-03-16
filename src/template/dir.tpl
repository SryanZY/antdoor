<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>{{title}}</title>
    <style>
        body {
            margin: 3px;
        }
        a {
            display: block;
            margin-bottom: 10px;
            width: auto;
            height: 25px;
            text-align: center;
            line-height: 25px;
            background-color: #ccc;
            font-size: 14px;
        }
    </style>
</head>
<body>
    {{#each files}}
        <a href="{{../dir}}/{{file}}">[{{icon}}]{{file}}</a>
    {{/each}}
</body>
</html>