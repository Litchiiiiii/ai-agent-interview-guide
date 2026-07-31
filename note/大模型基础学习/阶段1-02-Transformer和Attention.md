# Transformer 和 Attention
1. transfomer流程

    Encoder:

    待翻译句子->embedding + 位置向量->x

    x -> 自注意力层 ->计算x的Q K V

    当前token发出的查询:
    
    ${Q = X·W_Q}$

    每个 token 提供的匹配特征:

    ${K = X·W_K}$

    每个 token 真正贡献的内容向量:

    ${V = X·W_V}$
    
    接着计算当前token对其他token的关注分数：

    ${score = \frac {QK^T} {\sqrt d_k}}$ 

    ${QK^T}$ 进行的是点积运算，可以计算俩个向量的相似度（$|Q||K^T|cos\theta$）

    为什么要除 ${\sqrt d_k}$?

    因为 Q 和 K 的点积会随着向量维度增大而变大。如果直接送入 softmax，容易让注意力分布过于尖锐，导致梯度变小、训练不稳定。$d_k$ 是 Key 向量维度，在随机初始化假设下，点积的方差大约与 $d_k$ 成正比，所以除以 ${\sqrt d_k}$ 可以稳定分数范围，这就是 scaled dot-product attention。

    