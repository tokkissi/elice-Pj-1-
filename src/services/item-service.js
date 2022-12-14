import { itemsModel } from '../db';
import { CustomError } from '../middlewares';

class ItemService {
  constructor(itemModel) {
    this.itemModel = itemModel;
  }
  // 전체 item 조회
  async getAll(sortingInfo) {
    const items = await this.itemModel.findAll(sortingInfo);
    return items;
  }

  // 카테고리별 item 조회
  async getByCategoryId(catId, sortingInfo) {
    const items = await this.itemModel.findByCategory(catId, sortingInfo);
    return items;
  }

  // 특정 item 조회
  async getByItemID(itemId) {
    const item = await this.itemModel.findById(itemId);

    if (!item) {
      throw new CustomError(404, `조회하신 상품의 정보가 존재하지 않습니다.`);
    }

    return item;
  }

  // item 등록
  async createItem(itemInfo, userType) {
    const {
      name,
      brand,
      price,
      description,
      category,
      imageUrl,
      isRecommend,
      isDiscount,
      disPercent,
    } = itemInfo;

    const item = await itemsModel.findByName(name);
    if (item) {
      throw new CustomError(409, `${name}은 이미 등록 된 상품입니다.`);
    }

    if (userType !== 'admin') {
      throw new CustomError(403, '접근 권한이 없습니다.');
    }

    const newItemInfo = {
      name,
      brand,
      price,
      description,
      category,
      imageUrl,
      isRecommend,
      isDiscount,
      disPercent,
    };
    const newItem = await this.itemModel.create(newItemInfo);
    return newItem;
  }

  // item info 수정
  async updateItem(itemId, userType, toUpdate) {
    const item = await this.itemModel.findById(itemId);
    if (!item) {
      throw new CustomError(404, '조회하신 상품의 정보가 존재하지 않습니다.');
    }

    if (userType !== 'admin') {
      throw new CustomError(403, '접근 권한이 없습니다.');
    }
    const { name } = toUpdate;
    if (item.name === name) {
      throw new CustomError(409, `${name}은 이미 등록 된 상품입니다.`);
    }

    const updatedUser = await this.itemModel.update({
      itemId,
      update: toUpdate,
    });

    return updatedUser;
  }

  async deleteItem(itemId, userType) {
    const item = await this.itemModel.remove(itemId);
    if (!item) {
      throw new CustomError(404, '조회하신 상품의 정보가 존재하지 않습니다.');
    }

    if (userType !== 'admin') {
      throw new CustomError(403, '접근 권한이 없습니다.');
    }

    await this.itemModel.remove(itemId);
  }
}

export const itemService = new ItemService(itemsModel);
