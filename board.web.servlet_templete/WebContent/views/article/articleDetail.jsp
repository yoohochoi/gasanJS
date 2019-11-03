<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="utf-8">
<%@ include file="/views/layout/common.jsp"%>
<title>소셜보드</title>
</head>
<body>

	<!-- Main Navigation ========================================================================================== -->
	<%@ include file="/views/layout/menu.jsp"%>
	<!-- Header ========================================================================================== -->
	<header>
		<div class="container">
			<div class="row">
				<div class="col-lg-12">
					<div class="jumbotron">
						<h2>게시판</h2>
					</div>
				</div>
			</div>

			<div class="row">
				<div class="col-sm-12 col-lg-12">
					<ol class="breadcrumb">
						<li><a href="#">홈</a></li>
						<li><a href="#">게시판</a></li>
						<li class="active">${boardDetail.name }</li>
					</ol>
				</div>
			</div>
		</div>
	</header>

	<!-- Container ======================================================================================= -->


	<div class="container">
		<div class="row">

			<div style="z-index: 1020"
				class="col-xs-12 col-sm-3 col-md-3 col-lg-3">
				<div class="list-group panel panel-success">
					<div class="panel-heading list-group-item text-center hidden-xs">
						<h4>게시판</h4>
					</div>
					<div>
						<c:forEach var="board" items="${boards }">
							<a href="${ctx}/board/find.do?boardId=${board.boardId}"
								class="list-group-item hidden-xs">#${board.name } </a>
						</c:forEach>
					</div>

				</div>
			</div>

			<div class="col-sm-9 col-lg-9">
				<div>
					<h3>${boardDetail.name }</h3>
				</div>

				<div class="panel panel-default">
					<div class="panel-heading">${article.title }</div>
					<div class="panel-body">
						<div class="post">

							<strong>${article.authorName }</strong> &nbsp;<span
								class="text-muted">${article.regDate }</span> &nbsp;<span
								class="text-muted">110 읽음</span> <a
								href="${ctx }/article/modify.do?articleId=${article.articleId}&boardId=${article.boardId}"
								class="glyphicon glyphicon-cog pull-right" style="padding: 10px">수정 </a>
						
						
							<a href="${ctx }/article/remove.do?articleId=${article.articleId}&boardId=${article.boardId}"
								class="glyphicon glyphicon-cog pull-right" style="padding: 10px">삭제
								</a>
						</div>
						<br>

						<p style="padding: 20px">${article.contents }</p>

						<c:forEach var="comment" items="${article.comments }">
							<table class="table" style="font-size: 13px padding:20px;">
								<tr>
									<td><strong>${comment.authorName }</strong></td>
									<td class="text-right">${comment.regDate} 
									<a class="glyphicon glyphicon-trash"
										href="${ctx }/comment/remove.do?articleId=${article.articleId}&commentId=${comment.commentId }"></a>
									</td>
								</tr>
								<tr>
									<td colspan="2">
										<p class="txt">${comment.comments }</p>
									</td>
							</table>
						</c:forEach>
					</div>
					
					<div class="pane1-footer">
					<div class="write_area">
						<form action="${ctx }/comment/regist.do">
							<input type="hidden" name="articleId" value="${article.articleId }">
							<textarea class="input_write_comment" name="comments" placeholder="댓글쓰기"></textarea>
							<input type="submit" class="comment_submit" value="전송">
						</form>
					
					</div>
					</div>
					
					
				</div>

				<div class="text-center">
					<a href="${ctx }/board/find.do?boardId=${boardDetail.boardId}">
						<button type="button" class="btn btn-default">목록으로</button>
					</a>
				</div>
			</div>
		</div>

		<!-- Footer ========================================================================================== -->
		<%@ include file="/views/layout/footer.jsp"%>
	</div>

</body>
</html>