/**
 *  This file is part of emailNotes.
 *
 * @Description Say something for this file.
 * @Author      wuchuheng<root@wuchuheng.com>
 * @Time        2022/11/20 16:02
 */
import Taro from "@tarojs/taro";

const toIntoStorageDetailPage = () =>
  Taro.navigateTo({
    url: "/pages/IntoStorageDetailPage/IntoStorageDetailPage",
  });

export { toIntoStorageDetailPage };
