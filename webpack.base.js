module.exports = {
  // Ánh xạ code đã biên dịch trở về đoạn code gốc
  devtool: "source-map",
  module: {
    rules: [
      {
        // Ung dung Bable cho tat ca cac file *.js
        test: /\.js?$/,
        loader: "babel-loader",
        // Yeu cau Babel khong bao gom cac phan trong node-modules
        exclude: /node-modules/,
        options: {
          presets: [
            "react",
            "stage-2",
            ["env", { targets: { browsers: ["last 2 versions"] } }],
          ],
        },
      },
    ],
  },
};
