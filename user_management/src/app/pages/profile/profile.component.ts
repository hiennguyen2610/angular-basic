import { Component } from "@angular/core";
import { FormBuilder, FormArray, Validators } from "@angular/forms";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"],
})
export class ProfileComponent {

  // Khai báo ảnh
  avatarUrl: any = "assets/img/default-avatar.jpg";

  // Khai báo form control name
  profileForm = this.fb.group({
    name: ["", [Validators.required]],
    birthday: [""],
    phone: ["", [Validators.required, Validators.minLength(10), Validators.maxLength(11)]],
    bio: [""],
    addresses: this.fb.array([this.fb.control("Địa chỉ 1")]),
  });

  constructor(private fb: FormBuilder) {}

  // Viết thêm getter để truy xuất thuộc tính addresses nhanh hơn
  get addresses() {
    return this.profileForm.get("addresses") as FormArray;
  }

  // Thêm địa chỉ
  addAddress() {
    this.addresses.push(this.fb.control(""));
  }

  // Xóa địa chỉ
  removeAddress(index: number) {
    this.addresses.removeAt(index);
  }

  // Sử dụng FileReader để upload ảnh
  onFileChange(event : any): void {
    const files = event.target.files;
    let reader = new FileReader();

    if (files && files.length) {
      // Nếu người dùng chọn nhiều file thì lấy cái đầu tiên
      const file = event.target.files[0];
      // Đọc file dưới dạng kiểu dữ liệu url
      reader.readAsDataURL(file);
      // Hiển thị ảnh trên giao diện
      reader.onload = () => {
        this.avatarUrl = reader.result?.toString();
      };
    }
  }

  updateProfile() {
    console.log(this.profileForm.value);
  }
}
