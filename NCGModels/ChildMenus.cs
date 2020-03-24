using System;
using System.Collections.Generic;
using System.Linq;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace NCGModels
{
   public class ChildMenus
    {
        /// <summary>
        /// 菜单信息表
        /// </summary>
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ID { get; set; }
        /// <summary>
        /// 父编号
        /// </summary>
        [StringLength(45)]
        public string parentID { get; set; }
        /// <summary>
        /// 菜单名称
        /// </summary>
        [StringLength(45)]
        public string caption { get; set; }
        /// <summary>
        /// 标签名称
        /// </summary>
        [StringLength(45)]
        public string filedName { get; set; }
        /// <summary>
        /// 连接地址
        /// </summary>
        [StringLength(100)]
        public string menuUrl { get; set; }
        /// <summary>
        /// 排序
        /// </summary>
        public int menuSort { get; set; }
        /// <summary>
        /// 图标
        /// </summary>
        [StringLength(50)]
        public string menuIcon { get; set; }
        /// <summary>
        /// 类型
        /// </summary>
        [StringLength(20)]
        public string menuType { get; set; }
        /// <summary>
        /// 是否隐藏
        /// </summary>
        public int isShow { get; set; }

    }
}
